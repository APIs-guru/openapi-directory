import requests
from sdk.models import operations
from . import utils

class Images:
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

    
    def get_image(self) -> operations.GetImageResponse:
        r"""Returns a simple image of the type suggest by the Accept header.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/image"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_image_jpeg(self) -> operations.GetImageJpegResponse:
        r"""Returns a simple JPEG image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/image/jpeg"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImageJpegResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_image_png(self) -> operations.GetImagePngResponse:
        r"""Returns a simple PNG image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/image/png"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImagePngResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_image_svg(self) -> operations.GetImageSvgResponse:
        r"""Returns a simple SVG image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/image/svg"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImageSvgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_image_webp(self) -> operations.GetImageWebpResponse:
        r"""Returns a simple WEBP image.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/image/webp"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetImageWebpResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    