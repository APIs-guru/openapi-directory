import requests
from sdk.models import operations
from . import utils

class DynamicData:
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

    
    def delete_delay_delay_(self, request: operations.DeleteDelayDelayRequest) -> operations.DeleteDelayDelayResponse:
        r"""Returns a delayed response (max of 10 seconds).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_base64_value_(self, request: operations.GetBase64ValueRequest) -> operations.GetBase64ValueResponse:
        r"""Decodes base64url-encoded string.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/base64/{value}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBase64ValueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_bytes_n_(self, request: operations.GetBytesNRequest) -> operations.GetBytesNResponse:
        r"""Returns n random bytes generated with given seed
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/bytes/{n}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBytesNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_delay_delay_(self, request: operations.GetDelayDelayRequest) -> operations.GetDelayDelayResponse:
        r"""Returns a delayed response (max of 10 seconds).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_drip(self, request: operations.GetDripRequest) -> operations.GetDripResponse:
        r"""Drips data over a duration after an optional initial delay.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/drip"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDripResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_links_n_offset_(self, request: operations.GetLinksNOffsetRequest) -> operations.GetLinksNOffsetResponse:
        r"""Generate a page containing n links to other pages which do the same.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/links/{n}/{offset}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLinksNOffsetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_range_numbytes_(self, request: operations.GetRangeNumbytesRequest) -> operations.GetRangeNumbytesResponse:
        r"""Streams n random bytes generated with given seed, at given chunk size per packet.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/range/{numbytes}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRangeNumbytesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_stream_bytes_n_(self, request: operations.GetStreamBytesNRequest) -> operations.GetStreamBytesNResponse:
        r"""Streams n random bytes generated with given seed, at given chunk size per packet.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stream-bytes/{n}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStreamBytesNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_stream_n_(self, request: operations.GetStreamNRequest) -> operations.GetStreamNResponse:
        r"""Stream n JSON responses
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/stream/{n}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStreamNResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_uuid(self) -> operations.GetUUIDResponse:
        r"""Return a UUID4.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/uuid"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUUIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def patch_delay_delay_(self, request: operations.PatchDelayDelayRequest) -> operations.PatchDelayDelayResponse:
        r"""Returns a delayed response (max of 10 seconds).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PATCH", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PatchDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def post_delay_delay_(self, request: operations.PostDelayDelayRequest) -> operations.PostDelayDelayResponse:
        r"""Returns a delayed response (max of 10 seconds).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def put_delay_delay_(self, request: operations.PutDelayDelayRequest) -> operations.PutDelayDelayResponse:
        r"""Returns a delayed response (max of 10 seconds).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)
        
        
        client = self._client
        
        r = client.request("PUT", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def trace_delay_delay_(self, request: operations.TraceDelayDelayRequest) -> operations.TraceDelayDelayResponse:
        r"""Returns a delayed response (max of 10 seconds).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/delay/{delay}", request.path_params)
        
        
        client = self._client
        
        r = client.request("TRACE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TraceDelayDelayResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    