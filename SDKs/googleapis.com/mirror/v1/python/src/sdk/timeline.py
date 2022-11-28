import requests
from sdk.models import operations
from . import utils

class Timeline:
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

    
    def mirror_timeline_attachments_delete(self, request: operations.MirrorTimelineAttachmentsDeleteRequest) -> operations.MirrorTimelineAttachmentsDeleteResponse:
        r"""Deletes an attachment from a timeline item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timeline/{itemId}/attachments/{attachmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorTimelineAttachmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def mirror_timeline_attachments_get(self, request: operations.MirrorTimelineAttachmentsGetRequest) -> operations.MirrorTimelineAttachmentsGetResponse:
        r"""Retrieves an attachment on a timeline item by item ID and attachment ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timeline/{itemId}/attachments/{attachmentId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorTimelineAttachmentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def mirror_timeline_attachments_insert(self, request: operations.MirrorTimelineAttachmentsInsertRequest) -> operations.MirrorTimelineAttachmentsInsertResponse:
        r"""Adds a new attachment to a timeline item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timeline/{itemId}/attachments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorTimelineAttachmentsInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def mirror_timeline_attachments_list(self, request: operations.MirrorTimelineAttachmentsListRequest) -> operations.MirrorTimelineAttachmentsListResponse:
        r"""Returns a list of attachments for a timeline item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timeline/{itemId}/attachments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorTimelineAttachmentsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def mirror_timeline_delete(self, request: operations.MirrorTimelineDeleteRequest) -> operations.MirrorTimelineDeleteResponse:
        r"""Deletes a timeline item.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timeline/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorTimelineDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def mirror_timeline_get(self, request: operations.MirrorTimelineGetRequest) -> operations.MirrorTimelineGetResponse:
        r"""Gets a single timeline item by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timeline/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorTimelineGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def mirror_timeline_insert(self, request: operations.MirrorTimelineInsertRequest) -> operations.MirrorTimelineInsertResponse:
        r"""Inserts a new item into the timeline.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/timeline"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorTimelineInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def mirror_timeline_list(self, request: operations.MirrorTimelineListRequest) -> operations.MirrorTimelineListResponse:
        r"""Retrieves a list of timeline items for the authenticated user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/timeline"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorTimelineListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def mirror_timeline_patch(self, request: operations.MirrorTimelinePatchRequest) -> operations.MirrorTimelinePatchResponse:
        r"""Updates a timeline item in place. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timeline/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorTimelinePatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    
    def mirror_timeline_update(self, request: operations.MirrorTimelineUpdateRequest) -> operations.MirrorTimelineUpdateResponse:
        r"""Updates a timeline item in place.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/timeline/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MirrorTimelineUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "*/*"):
                res.body = r.content

        return res

    