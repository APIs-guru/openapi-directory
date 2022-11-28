import requests
from sdk.models import operations
from . import utils

class VoiceConversion:
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

    
    def voice_conversion(self, request: operations.VoiceConversionRequest) -> operations.VoiceConversionResponse:
        r"""Tell Nexmo if your voice call was successful
        Send a Conversion API request with information about the Call or Text-To-Speech identified by `message-id`. Nexmo uses your conversion data and internal information about `message-id` to help improve our routing of messages in the future.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/voice"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VoiceConversionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 402:
            pass
        elif r.status_code == 420:
            pass
        elif r.status_code == 423:
            pass

        return res

    