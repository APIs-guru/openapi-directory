import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Chains:
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

    
    def mybusiness_chains_get(self, request: operations.MybusinessChainsGetRequest) -> operations.MybusinessChainsGetResponse:
        r"""Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v4/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessChainsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Chain])
                res.chain = out

        return res

    
    def mybusiness_chains_search(self, request: operations.MybusinessChainsSearchRequest) -> operations.MybusinessChainsSearchResponse:
        r"""Searches the chain based on chain name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v4/chains:search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessChainsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchChainsResponse])
                res.search_chains_response = out

        return res

    