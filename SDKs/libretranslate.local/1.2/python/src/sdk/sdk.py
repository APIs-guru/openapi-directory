

import requests
from sdk.models import operations
from . import utils




SERVERS = [
	"http://libretranslate.local",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_frontend_settings(self) -> operations.GetFrontendSettingsResponse:
        r"""Retrieve frontend specific settings
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/frontend/settings"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFrontendSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def get_languages(self) -> operations.GetLanguagesResponse:
        r"""Retrieve list of supported languages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/languages"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLanguagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_detect(self, request: operations.PostDetectRequest) -> operations.PostDetectResponse:
        r"""Detect the language of a single text
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/detect"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostDetectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_languages(self) -> operations.PostLanguagesResponse:
        r"""Retrieve list of supported languages
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/languages"
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PostLanguagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def post_translate(self, request: operations.PostTranslateRequest) -> operations.PostTranslateResponse:
        r"""Translate text from a language to another
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/translate"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostTranslateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 429:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    