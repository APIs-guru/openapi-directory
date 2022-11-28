import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Replies:
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

    
    def drive_replies_create(self, request: operations.DriveRepliesCreateRequest) -> operations.DriveRepliesCreateResponse:
        r"""Creates a new reply to a comment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/comments/{commentId}/replies", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveRepliesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reply])
                res.reply = out

        return res

    
    def drive_replies_delete(self, request: operations.DriveRepliesDeleteRequest) -> operations.DriveRepliesDeleteResponse:
        r"""Deletes a reply.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/comments/{commentId}/replies/{replyId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveRepliesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def drive_replies_get(self, request: operations.DriveRepliesGetRequest) -> operations.DriveRepliesGetResponse:
        r"""Gets a reply by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/comments/{commentId}/replies/{replyId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveRepliesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reply])
                res.reply = out

        return res

    
    def drive_replies_list(self, request: operations.DriveRepliesListRequest) -> operations.DriveRepliesListResponse:
        r"""Lists a comment's replies.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/comments/{commentId}/replies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveRepliesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReplyList])
                res.reply_list = out

        return res

    
    def drive_replies_update(self, request: operations.DriveRepliesUpdateRequest) -> operations.DriveRepliesUpdateResponse:
        r"""Updates a reply with patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/files/{fileId}/comments/{commentId}/replies/{replyId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DriveRepliesUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Reply])
                res.reply = out

        return res

    