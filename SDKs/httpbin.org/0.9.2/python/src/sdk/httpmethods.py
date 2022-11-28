import requests
from sdk.models import operations
from . import utils

class HTTPMethods:
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

    
    def delete_delete(self) -> operations.DeleteDeleteResponse:
        r"""The request's DELETE parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/delete"
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_get(self) -> operations.GetGetResponse:
        r"""The request's query parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/get"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_patch(self) -> operations.PatchPatchResponse:
        r"""The request's PATCH parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/patch"
        
        
        client = self._client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_post(self) -> operations.PostPostResponse:
        r"""The request's POST parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/post"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPostResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_put(self) -> operations.PutPutResponse:
        r"""The request's PUT parameters.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/put"
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPutResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    