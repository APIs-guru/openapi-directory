import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Presentations:
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

    
    def slides_presentations_batch_update(self, request: operations.SlidesPresentationsBatchUpdateRequest) -> operations.SlidesPresentationsBatchUpdateResponse:
        r"""Applies one or more updates to the presentation. Each request is validated before being applied. If any request is not valid, then the entire request will fail and nothing will be applied. Some requests have replies to give you some information about how they are applied. Other requests do not need to return information; these each return an empty reply. The order of replies matches that of the requests. For example, suppose you call batchUpdate with four updates, and only the third one returns information. The response would have two empty replies: the reply to the third request, and another empty reply, in that order. Because other users may be editing the presentation, the presentation might not exactly reflect your changes: your changes may be altered with respect to collaborator changes. If there are no collaborators, the presentation should reflect your changes. In any case, the updates in your request are guaranteed to be applied together atomically.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/presentations/{presentationId}:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SlidesPresentationsBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchUpdatePresentationResponse])
                res.batch_update_presentation_response = out

        return res

    
    def slides_presentations_create(self, request: operations.SlidesPresentationsCreateRequest) -> operations.SlidesPresentationsCreateResponse:
        r"""Creates a blank presentation using the title given in the request. If a `presentationId` is provided, it is used as the ID of the new presentation. Otherwise, a new ID is generated. Other fields in the request, including any provided content, are ignored. Returns the created presentation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/presentations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SlidesPresentationsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Presentation])
                res.presentation = out

        return res

    
    def slides_presentations_get(self, request: operations.SlidesPresentationsGetRequest) -> operations.SlidesPresentationsGetResponse:
        r"""Gets the latest version of the specified presentation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/presentations/{presentationId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SlidesPresentationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Presentation])
                res.presentation = out

        return res

    
    def slides_presentations_pages_get(self, request: operations.SlidesPresentationsPagesGetRequest) -> operations.SlidesPresentationsPagesGetResponse:
        r"""Gets the latest version of the specified page in the presentation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/presentations/{presentationId}/pages/{pageObjectId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SlidesPresentationsPagesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Page])
                res.page = out

        return res

    
    def slides_presentations_pages_get_thumbnail(self, request: operations.SlidesPresentationsPagesGetThumbnailRequest) -> operations.SlidesPresentationsPagesGetThumbnailResponse:
        r"""Generates a thumbnail of the latest version of the specified page in the presentation and returns a URL to the thumbnail image. This request counts as an [expensive read request](/slides/limits) for quota purposes.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/presentations/{presentationId}/pages/{pageObjectId}/thumbnail", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SlidesPresentationsPagesGetThumbnailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Thumbnail])
                res.thumbnail = out

        return res

    