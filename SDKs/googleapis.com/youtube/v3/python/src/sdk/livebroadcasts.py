import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class LiveBroadcasts:
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

    
    def youtube_live_broadcasts_bind(self, request: operations.YoutubeLiveBroadcastsBindRequest) -> operations.YoutubeLiveBroadcastsBindResponse:
        r"""Bind a broadcast to a stream.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveBroadcasts/bind"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveBroadcastsBindResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveBroadcast])
                res.live_broadcast = out

        return res

    
    def youtube_live_broadcasts_delete(self, request: operations.YoutubeLiveBroadcastsDeleteRequest) -> operations.YoutubeLiveBroadcastsDeleteResponse:
        r"""Delete a given broadcast.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveBroadcasts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveBroadcastsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def youtube_live_broadcasts_insert(self, request: operations.YoutubeLiveBroadcastsInsertRequest) -> operations.YoutubeLiveBroadcastsInsertResponse:
        r"""Inserts a new stream for the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveBroadcasts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveBroadcastsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveBroadcast])
                res.live_broadcast = out

        return res

    
    def youtube_live_broadcasts_insert_cuepoint(self, request: operations.YoutubeLiveBroadcastsInsertCuepointRequest) -> operations.YoutubeLiveBroadcastsInsertCuepointResponse:
        r"""Insert cuepoints in a broadcast
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveBroadcasts/cuepoint"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveBroadcastsInsertCuepointResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Cuepoint])
                res.cuepoint = out

        return res

    
    def youtube_live_broadcasts_list(self, request: operations.YoutubeLiveBroadcastsListRequest) -> operations.YoutubeLiveBroadcastsListResponse:
        r"""Retrieve the list of broadcasts associated with the given channel.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveBroadcasts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveBroadcastsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveBroadcastListResponse])
                res.live_broadcast_list_response = out

        return res

    
    def youtube_live_broadcasts_transition(self, request: operations.YoutubeLiveBroadcastsTransitionRequest) -> operations.YoutubeLiveBroadcastsTransitionResponse:
        r"""Transition a broadcast to a given status.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveBroadcasts/transition"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveBroadcastsTransitionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveBroadcast])
                res.live_broadcast = out

        return res

    
    def youtube_live_broadcasts_update(self, request: operations.YoutubeLiveBroadcastsUpdateRequest) -> operations.YoutubeLiveBroadcastsUpdateResponse:
        r"""Updates an existing broadcast for the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/liveBroadcasts"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeLiveBroadcastsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LiveBroadcast])
                res.live_broadcast = out

        return res

    