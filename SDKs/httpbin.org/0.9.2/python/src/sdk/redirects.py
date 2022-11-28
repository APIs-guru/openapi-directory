import requests
from sdk.models import operations
from . import utils

class Redirects:
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

    
    def delete_redirect_to(self) -> operations.DeleteRedirectToResponse:
        r"""302/3XX Redirects to the given URL.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/redirect-to"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_absolute_redirect_n_(self, request: operations.GetAbsoluteRedirectNRequest) -> operations.GetAbsoluteRedirectNResponse:
        r"""Absolutely 302 Redirects n times.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/absolute-redirect/{n}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAbsoluteRedirectNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_redirect_n_(self, request: operations.GetRedirectNRequest) -> operations.GetRedirectNResponse:
        r"""302 Redirects n times.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/redirect/{n}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRedirectNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_redirect_to(self, request: operations.GetRedirectToRequest) -> operations.GetRedirectToResponse:
        r"""302/3XX Redirects to the given URL.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/redirect-to"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def get_relative_redirect_n_(self, request: operations.GetRelativeRedirectNRequest) -> operations.GetRelativeRedirectNResponse:
        r"""Relatively 302 Redirects n times.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/relative-redirect/{n}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRelativeRedirectNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def patch_redirect_to(self) -> operations.PatchRedirectToResponse:
        r"""302/3XX Redirects to the given URL.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/redirect-to"
        
        
        client = self._client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def post_redirect_to(self, request: operations.PostRedirectToRequest) -> operations.PostRedirectToResponse:
        r"""302/3XX Redirects to the given URL.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/redirect-to"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def put_redirect_to(self, request: operations.PutRedirectToRequest) -> operations.PutRedirectToResponse:
        r"""302/3XX Redirects to the given URL.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/redirect-to"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    
    def trace_redirect_to(self) -> operations.TraceRedirectToResponse:
        r"""302/3XX Redirects to the given URL.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/redirect-to"
        
        
        client = self._client
        
        r = client.request("TRACE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TraceRedirectToResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass

        return res

    