import requests
from sdk.models import operations
from . import utils

class StatusCodes:
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

    
    def delete_status_codes_(self, request: operations.DeleteStatusCodesRequest) -> operations.DeleteStatusCodesResponse:
        r"""Return status code or random status code if more than one are given
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def get_status_codes_(self, request: operations.GetStatusCodesRequest) -> operations.GetStatusCodesResponse:
        r"""Return status code or random status code if more than one are given
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def patch_status_codes_(self, request: operations.PatchStatusCodesRequest) -> operations.PatchStatusCodesResponse:
        r"""Return status code or random status code if more than one are given
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def post_status_codes_(self, request: operations.PostStatusCodesRequest) -> operations.PostStatusCodesResponse:
        r"""Return status code or random status code if more than one are given
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def put_status_codes_(self, request: operations.PutStatusCodesRequest) -> operations.PutStatusCodesResponse:
        r"""Return status code or random status code if more than one are given
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def trace_status_codes_(self, request: operations.TraceStatusCodesRequest) -> operations.TraceStatusCodesResponse:
        r"""Return status code or random status code if more than one are given
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/status/{codes}", request.path_params)
        
        
        client = self._client
        
        r = client.request("TRACE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TraceStatusCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 100:
            pass
        elif r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    