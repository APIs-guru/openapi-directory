import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Resellernotify:
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

    
    def reseller_resellernotify_getwatchdetails(self, request: operations.ResellerResellernotifyGetwatchdetailsRequest) -> operations.ResellerResellernotifyGetwatchdetailsResponse:
        r"""Returns all the details of the watch corresponding to the reseller.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/reseller/v1/resellernotify/getwatchdetails"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ResellerResellernotifyGetwatchdetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResellernotifyGetwatchdetailsResponse])
                res.resellernotify_getwatchdetails_response = out

        return res

    
    def reseller_resellernotify_register(self, request: operations.ResellerResellernotifyRegisterRequest) -> operations.ResellerResellernotifyRegisterResponse:
        r"""Registers a Reseller for receiving notifications.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/reseller/v1/resellernotify/register"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ResellerResellernotifyRegisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResellernotifyResource])
                res.resellernotify_resource = out

        return res

    
    def reseller_resellernotify_unregister(self, request: operations.ResellerResellernotifyUnregisterRequest) -> operations.ResellerResellernotifyUnregisterResponse:
        r"""Unregisters a Reseller for receiving notifications.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apps/reseller/v1/resellernotify/unregister"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ResellerResellernotifyUnregisterResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResellernotifyResource])
                res.resellernotify_resource = out

        return res

    