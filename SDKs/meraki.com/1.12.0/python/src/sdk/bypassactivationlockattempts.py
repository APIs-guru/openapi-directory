import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class BypassActivationLockAttempts:
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

    
    def create_network_sm_bypass_activation_lock_attempt(self, request: operations.CreateNetworkSmBypassActivationLockAttemptRequest) -> operations.CreateNetworkSmBypassActivationLockAttemptResponse:
        r"""Bypass activation lock attempt
        Bypass activation lock attempt
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/bypassActivationLockAttempts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateNetworkSmBypassActivationLockAttemptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.create_network_sm_bypass_activation_lock_attempt_201_application_json_object = out

        return res

    
    def get_network_sm_bypass_activation_lock_attempt(self, request: operations.GetNetworkSmBypassActivationLockAttemptRequest) -> operations.GetNetworkSmBypassActivationLockAttemptResponse:
        r"""Bypass activation lock attempt status
        Bypass activation lock attempt status
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/networks/{networkId}/sm/bypassActivationLockAttempts/{attemptId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetNetworkSmBypassActivationLockAttemptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_network_sm_bypass_activation_lock_attempt_200_application_json_object = out

        return res

    