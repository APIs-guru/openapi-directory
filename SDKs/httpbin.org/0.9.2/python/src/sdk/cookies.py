import requests
from sdk.models import operations
from . import utils

class Cookies:
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

    
    def get_cookies(self) -> operations.GetCookiesResponse:
        r"""Returns cookie data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cookies"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCookiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_cookies_delete(self, request: operations.GetCookiesDeleteRequest) -> operations.GetCookiesDeleteResponse:
        r"""Deletes cookie(s) as provided by the query string and redirects to cookie list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cookies/delete"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCookiesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_cookies_set(self, request: operations.GetCookiesSetRequest) -> operations.GetCookiesSetResponse:
        r"""Sets cookie(s) as provided by the query string and redirects to cookie list.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/cookies/set"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCookiesSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_cookies_set_name_value_(self, request: operations.GetCookiesSetNameValueRequest) -> operations.GetCookiesSetNameValueResponse:
        r"""Sets a cookie and redirects to cookie list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/cookies/set/{name}/{value}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCookiesSetNameValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    