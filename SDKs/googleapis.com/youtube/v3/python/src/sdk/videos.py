import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Videos:
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

    
    def youtube_videos_delete(self, request: operations.YoutubeVideosDeleteRequest) -> operations.YoutubeVideosDeleteResponse:
        r"""Deletes a resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/videos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeVideosDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def youtube_videos_get_rating(self, request: operations.YoutubeVideosGetRatingRequest) -> operations.YoutubeVideosGetRatingResponse:
        r"""Retrieves the ratings that the authorized user gave to a list of specified videos.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/videos/getRating"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeVideosGetRatingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoGetRatingResponse])
                res.video_get_rating_response = out

        return res

    
    def youtube_videos_insert(self, request: operations.YoutubeVideosInsertRequest) -> operations.YoutubeVideosInsertResponse:
        r"""Inserts a new resource into this collection.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/videos"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeVideosInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out

        return res

    
    def youtube_videos_list(self, request: operations.YoutubeVideosListRequest) -> operations.YoutubeVideosListResponse:
        r"""Retrieves a list of resources, possibly filtered.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/videos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeVideosListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VideoListResponse])
                res.video_list_response = out

        return res

    
    def youtube_videos_rate(self, request: operations.YoutubeVideosRateRequest) -> operations.YoutubeVideosRateResponse:
        r"""Adds a like or dislike rating to a video or removes a rating from a video.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/videos/rate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeVideosRateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def youtube_videos_report_abuse(self, request: operations.YoutubeVideosReportAbuseRequest) -> operations.YoutubeVideosReportAbuseResponse:
        r"""Report abuse for a video.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/videos/reportAbuse"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeVideosReportAbuseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def youtube_videos_update(self, request: operations.YoutubeVideosUpdateRequest) -> operations.YoutubeVideosUpdateResponse:
        r"""Updates an existing resource.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/youtube/v3/videos"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.YoutubeVideosUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Video])
                res.video = out

        return res

    