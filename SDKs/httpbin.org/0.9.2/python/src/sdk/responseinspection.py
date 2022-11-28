import requests
from sdk.models import operations
from . import utils

class ResponseInspection:
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

    
    def get_cache(self, request: operations.GetCacheRequest) -> operations.GetCacheResponse:
        r"""Returns a 304 if an If-Modified-Since header or If-None-Match is present. Returns the same as a GET otherwise.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cache"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCacheResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 304:
            pass

        return res

    
    def get_cache_value_(self, request: operations.GetCacheValueRequest) -> operations.GetCacheValueResponse:
        r"""Sets a Cache-Control header for n seconds.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cache/{value}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCacheValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_etag_etag_(self, request: operations.GetEtagEtagRequest) -> operations.GetEtagEtagResponse:
        r"""Assumes the resource has the given etag and responds to If-None-Match and If-Match headers appropriately.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/etag/{etag}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEtagEtagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 412:
            pass

        return res

    
    def get_response_headers(self, request: operations.GetResponseHeadersRequest) -> operations.GetResponseHeadersResponse:
        r"""Returns a set of response headers from the query string.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/response-headers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetResponseHeadersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_response_headers(self, request: operations.PostResponseHeadersRequest) -> operations.PostResponseHeadersResponse:
        r"""Returns a set of response headers from the query string.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/response-headers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PostResponseHeadersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    