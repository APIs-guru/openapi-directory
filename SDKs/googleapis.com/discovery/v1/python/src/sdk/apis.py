import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Apis:
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

    
    def discovery_apis_get_rest(self, request: operations.DiscoveryApisGetRestRequest) -> operations.DiscoveryApisGetRestResponse:
        r"""Retrieve the description of a particular version of an api.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/apis/{api}/{version}/rest", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryApisGetRestResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RestDescription])
                res.rest_description = out

        return res

    
    def discovery_apis_list(self, request: operations.DiscoveryApisListRequest) -> operations.DiscoveryApisListResponse:
        r"""Retrieve the list of APIs supported at this endpoint.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/apis"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DiscoveryApisListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DirectoryList])
                res.directory_list = out

        return res

    