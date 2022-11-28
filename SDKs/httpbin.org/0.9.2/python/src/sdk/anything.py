import requests
from typing import Any
from sdk.models import operations
from . import utils

class Anything:
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

    
    def delete_anything(self) -> operations.DeleteAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/anything"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def delete_anything_anything_(self, request: operations.DeleteAnythingAnythingRequest) -> operations.DeleteAnythingAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_anything(self) -> operations.GetAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/anything"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_anything_anything_(self, request: operations.GetAnythingAnythingRequest) -> operations.GetAnythingAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_anything(self) -> operations.PatchAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/anything"
        
        
        client = self._client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_anything_anything_(self, request: operations.PatchAnythingAnythingRequest) -> operations.PatchAnythingAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_anything(self) -> operations.PostAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/anything"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_anything_anything_(self, request: operations.PostAnythingAnythingRequest) -> operations.PostAnythingAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_anything(self) -> operations.PutAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/anything"
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_anything_anything_(self, request: operations.PutAnythingAnythingRequest) -> operations.PutAnythingAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def trace_anything(self) -> operations.TraceAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/anything"
        
        
        client = self._client
        
        r = client.request("TRACE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TraceAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def trace_anything_anything_(self, request: operations.TraceAnythingAnythingRequest) -> operations.TraceAnythingAnythingResponse:
        r"""Returns anything passed in request data.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/anything/{anything}", request.path_params)
        
        
        client = self._client
        
        r = client.request("TRACE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TraceAnythingAnythingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    