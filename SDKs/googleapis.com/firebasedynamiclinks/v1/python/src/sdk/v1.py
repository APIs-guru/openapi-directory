import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class V1:
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

    
    def firebasedynamiclinks_get_link_stats(self, request: operations.FirebasedynamiclinksGetLinkStatsRequest) -> operations.FirebasedynamiclinksGetLinkStatsResponse:
        r"""Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{dynamicLink}/linkStats", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasedynamiclinksGetLinkStatsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DynamicLinkStats])
                res.dynamic_link_stats = out

        return res

    
    def firebasedynamiclinks_install_attribution(self, request: operations.FirebasedynamiclinksInstallAttributionRequest) -> operations.FirebasedynamiclinksInstallAttributionResponse:
        r"""Get iOS strong/weak-match info for post-install attribution.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/installAttribution"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasedynamiclinksInstallAttributionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetIosPostInstallAttributionResponse])
                res.get_ios_post_install_attribution_response = out

        return res

    
    def firebasedynamiclinks_reopen_attribution(self, request: operations.FirebasedynamiclinksReopenAttributionRequest) -> operations.FirebasedynamiclinksReopenAttributionResponse:
        r"""Get iOS reopen attribution for app universal link open deeplinking.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/reopenAttribution"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebasedynamiclinksReopenAttributionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetIosReopenAttributionResponse])
                res.get_ios_reopen_attribution_response = out

        return res

    