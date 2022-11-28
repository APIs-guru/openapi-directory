import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class LiveStreams:
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

    
    def youtube_live_streams_delete(self, request: operations.YoutubeLiveStreamsDeleteRequest) -> operations.YoutubeLiveStreamsDeleteResponse:
        r"""Deletes an existing stream for the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveStreams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveStreamsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def youtube_live_streams_insert(self, request: operations.YoutubeLiveStreamsInsertRequest) -> operations.YoutubeLiveStreamsInsertResponse:
        r"""Inserts a new stream for the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveStreams"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveStreamsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStream])
                res.live_stream = out

        return res

    
    def youtube_live_streams_list(self, request: operations.YoutubeLiveStreamsListRequest) -> operations.YoutubeLiveStreamsListResponse:
        r"""Retrieve the list of streams associated with the given channel. --
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveStreams"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveStreamsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStreamListResponse])
                res.live_stream_list_response = out

        return res

    
    def youtube_live_streams_update(self, request: operations.YoutubeLiveStreamsUpdateRequest) -> operations.YoutubeLiveStreamsUpdateResponse:
        r"""Updates an existing stream for the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveStreams"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveStreamsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveStream])
                res.live_stream = out

        return res

    