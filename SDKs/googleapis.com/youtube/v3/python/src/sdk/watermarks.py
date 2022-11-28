import requests
from sdk.models import operations
from . import utils

class Watermarks:
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

    
    def youtube_watermarks_set(self, request: operations.YoutubeWatermarksSetRequest) -> operations.YoutubeWatermarksSetResponse:
        r"""Allows upload of watermark image and setting it for a channel.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/watermarks/set"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeWatermarksSetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def youtube_watermarks_unset(self, request: operations.YoutubeWatermarksUnsetRequest) -> operations.YoutubeWatermarksUnsetResponse:
        r"""Allows removal of channel watermark.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/watermarks/unset"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeWatermarksUnsetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    