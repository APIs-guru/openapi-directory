import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class FraudManagement:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def network_unblock(self, request: operations.NetworkUnblockRequest) -> operations.NetworkUnblockResponse:
        r"""Request a network unblock
        Request to unblock a network that has been blocked due to potential fraud detection
        <div class=\"Vlt-callout Vlt-callout--critical\">
          <div class=\"Vlt-callout__content\">
            <h4>Network Unblock is switched off by default.</h4>
            Please contact Sales to enable the Network Unblock API for your account.
          </div>
        </div>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/network-unblock"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.NetworkUnblockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NetworkUnblockResponseOk])
                res.network_unblock_response_ok = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NetworkUnblockResponseForbidden])
                res.network_unblock_response_forbidden = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.NetworkUnblockResponseNotFound])
                res.network_unblock_response_not_found = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.network_unblock_422_application_json_one_of = out
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorThrottled])
                res.error_throttled = out

        return res

    