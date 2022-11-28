import requests
from sdk.models import operations
from . import utils

class ResponseFormats:
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

    
    def get_brotli(self) -> operations.GetBrotliResponse:
        r"""Returns Brotli-encoded data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/brotli"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetBrotliResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_deflate(self) -> operations.GetDeflateResponse:
        r"""Returns Deflate-encoded data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deflate"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDeflateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_deny(self) -> operations.GetDenyResponse:
        r"""Returns page denied by robots.txt rules.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deny"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDenyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_encoding_utf8(self) -> operations.GetEncodingUTF8Response:
        r"""Returns a UTF-8 encoded body.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/encoding/utf8"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEncodingUTF8Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_gzip(self) -> operations.GetGzipResponse:
        r"""Returns GZip-encoded data.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/gzip"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetGzipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_html(self) -> operations.GetHTMLResponse:
        r"""Returns a simple HTML document.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/html"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHTMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_json(self) -> operations.GetJSONResponse:
        r"""Returns a simple JSON document.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/json"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJSONResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_robots_txt(self) -> operations.GetRobotsTxtResponse:
        r"""Returns some robots.txt rules.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/robots.txt"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRobotsTxtResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_xml(self) -> operations.GetXMLResponse:
        r"""Returns a simple XML document.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/xml"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetXMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    