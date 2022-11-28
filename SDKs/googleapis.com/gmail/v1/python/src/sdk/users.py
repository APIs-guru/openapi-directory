import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Users:
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

    
    def gmail_users_drafts_create(self, request: operations.GmailUsersDraftsCreateRequest) -> operations.GmailUsersDraftsCreateResponse:
        r"""Creates a new draft with the `DRAFT` label.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/drafts", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersDraftsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Draft])
                res.draft = out

        return res

    
    def gmail_users_drafts_delete(self, request: operations.GmailUsersDraftsDeleteRequest) -> operations.GmailUsersDraftsDeleteResponse:
        r"""Immediately and permanently deletes the specified draft. Does not simply trash it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/drafts/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersDraftsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_drafts_get(self, request: operations.GmailUsersDraftsGetRequest) -> operations.GmailUsersDraftsGetResponse:
        r"""Gets the specified draft.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/drafts/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersDraftsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Draft])
                res.draft = out

        return res

    
    def gmail_users_drafts_list(self, request: operations.GmailUsersDraftsListRequest) -> operations.GmailUsersDraftsListResponse:
        r"""Lists the drafts in the user's mailbox.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/drafts", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersDraftsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDraftsResponse])
                res.list_drafts_response = out

        return res

    
    def gmail_users_drafts_send(self, request: operations.GmailUsersDraftsSendRequest) -> operations.GmailUsersDraftsSendResponse:
        r"""Sends the specified, existing draft to the recipients in the `To`, `Cc`, and `Bcc` headers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/drafts/send", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersDraftsSendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out

        return res

    
    def gmail_users_drafts_update(self, request: operations.GmailUsersDraftsUpdateRequest) -> operations.GmailUsersDraftsUpdateResponse:
        r"""Replaces a draft's content.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/drafts/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersDraftsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Draft])
                res.draft = out

        return res

    
    def gmail_users_get_profile(self, request: operations.GmailUsersGetProfileRequest) -> operations.GmailUsersGetProfileResponse:
        r"""Gets the current user's Gmail profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/profile", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersGetProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Profile])
                res.profile = out

        return res

    
    def gmail_users_history_list(self, request: operations.GmailUsersHistoryListRequest) -> operations.GmailUsersHistoryListResponse:
        r"""Lists the history of all changes to the given mailbox. History results are returned in chronological order (increasing `historyId`).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/history", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersHistoryListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListHistoryResponse])
                res.list_history_response = out

        return res

    
    def gmail_users_labels_create(self, request: operations.GmailUsersLabelsCreateRequest) -> operations.GmailUsersLabelsCreateResponse:
        r"""Creates a new label.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/labels", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersLabelsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Label])
                res.label = out

        return res

    
    def gmail_users_labels_delete(self, request: operations.GmailUsersLabelsDeleteRequest) -> operations.GmailUsersLabelsDeleteResponse:
        r"""Immediately and permanently deletes the specified label and removes it from any messages and threads that it is applied to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/labels/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersLabelsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_labels_get(self, request: operations.GmailUsersLabelsGetRequest) -> operations.GmailUsersLabelsGetResponse:
        r"""Gets the specified label.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/labels/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersLabelsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Label])
                res.label = out

        return res

    
    def gmail_users_labels_list(self, request: operations.GmailUsersLabelsListRequest) -> operations.GmailUsersLabelsListResponse:
        r"""Lists all labels in the user's mailbox.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/labels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersLabelsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListLabelsResponse])
                res.list_labels_response = out

        return res

    
    def gmail_users_labels_patch(self, request: operations.GmailUsersLabelsPatchRequest) -> operations.GmailUsersLabelsPatchResponse:
        r"""Patch the specified label.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/labels/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersLabelsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Label])
                res.label = out

        return res

    
    def gmail_users_labels_update(self, request: operations.GmailUsersLabelsUpdateRequest) -> operations.GmailUsersLabelsUpdateResponse:
        r"""Updates the specified label.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/labels/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersLabelsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Label])
                res.label = out

        return res

    
    def gmail_users_messages_attachments_get(self, request: operations.GmailUsersMessagesAttachmentsGetRequest) -> operations.GmailUsersMessagesAttachmentsGetResponse:
        r"""Gets the specified message attachment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages/{messageId}/attachments/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesAttachmentsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.MessagePartBody])
                res.message_part_body = out

        return res

    
    def gmail_users_messages_batch_delete(self, request: operations.GmailUsersMessagesBatchDeleteRequest) -> operations.GmailUsersMessagesBatchDeleteResponse:
        r"""Deletes many messages by message ID. Provides no guarantees that messages were not already deleted or even existed at all.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages/batchDelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_messages_batch_modify(self, request: operations.GmailUsersMessagesBatchModifyRequest) -> operations.GmailUsersMessagesBatchModifyResponse:
        r"""Modifies the labels on the specified messages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages/batchModify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesBatchModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_messages_delete(self, request: operations.GmailUsersMessagesDeleteRequest) -> operations.GmailUsersMessagesDeleteResponse:
        r"""Immediately and permanently deletes the specified message. This operation cannot be undone. Prefer `messages.trash` instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_messages_get(self, request: operations.GmailUsersMessagesGetRequest) -> operations.GmailUsersMessagesGetResponse:
        r"""Gets the specified message.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out

        return res

    
    def gmail_users_messages_import(self, request: operations.GmailUsersMessagesImportRequest) -> operations.GmailUsersMessagesImportResponse:
        r"""Imports a message into only this user's mailbox, with standard email delivery scanning and classification similar to receiving via SMTP. This method doesn't perform SPF checks, so it might not work for some spam messages, such as those attempting to perform domain spoofing. This method does not send a message. Note: This function doesn't trigger forwarding rules or filters set up by the user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages/import", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out

        return res

    
    def gmail_users_messages_insert(self, request: operations.GmailUsersMessagesInsertRequest) -> operations.GmailUsersMessagesInsertResponse:
        r"""Directly inserts a message into only this user's mailbox similar to `IMAP APPEND`, bypassing most scanning and classification. Does not send a message.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out

        return res

    
    def gmail_users_messages_list(self, request: operations.GmailUsersMessagesListRequest) -> operations.GmailUsersMessagesListResponse:
        r"""Lists the messages in the user's mailbox.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMessagesResponse])
                res.list_messages_response = out

        return res

    
    def gmail_users_messages_modify(self, request: operations.GmailUsersMessagesModifyRequest) -> operations.GmailUsersMessagesModifyResponse:
        r"""Modifies the labels on the specified message.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages/{id}/modify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out

        return res

    
    def gmail_users_messages_send(self, request: operations.GmailUsersMessagesSendRequest) -> operations.GmailUsersMessagesSendResponse:
        r"""Sends the specified message to the recipients in the `To`, `Cc`, and `Bcc` headers.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages/send", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesSendResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out

        return res

    
    def gmail_users_messages_trash(self, request: operations.GmailUsersMessagesTrashRequest) -> operations.GmailUsersMessagesTrashResponse:
        r"""Moves the specified message to the trash.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages/{id}/trash", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesTrashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out

        return res

    
    def gmail_users_messages_untrash(self, request: operations.GmailUsersMessagesUntrashRequest) -> operations.GmailUsersMessagesUntrashResponse:
        r"""Removes the specified message from the trash.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/messages/{id}/untrash", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersMessagesUntrashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Message])
                res.message = out

        return res

    
    def gmail_users_settings_delegates_create(self, request: operations.GmailUsersSettingsDelegatesCreateRequest) -> operations.GmailUsersSettingsDelegatesCreateResponse:
        r"""Adds a delegate with its verification status set directly to `accepted`, without sending any verification email. The delegate user must be a member of the same G Suite organization as the delegator user. Gmail imposes limitations on the number of delegates and delegators each user in a G Suite organization can have. These limits depend on your organization, but in general each user can have up to 25 delegates and up to 10 delegators. Note that a delegate user must be referred to by their primary email address, and not an email alias. Also note that when a new delegate is created, there may be up to a one minute delay before the new delegate is available for use. This method is only available to service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/delegates", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsDelegatesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Delegate])
                res.delegate = out

        return res

    
    def gmail_users_settings_delegates_delete(self, request: operations.GmailUsersSettingsDelegatesDeleteRequest) -> operations.GmailUsersSettingsDelegatesDeleteResponse:
        r"""Removes the specified delegate (which can be of any verification status), and revokes any verification that may have been required for using it. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/delegates/{delegateEmail}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsDelegatesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_settings_delegates_get(self, request: operations.GmailUsersSettingsDelegatesGetRequest) -> operations.GmailUsersSettingsDelegatesGetResponse:
        r"""Gets the specified delegate. Note that a delegate user must be referred to by their primary email address, and not an email alias. This method is only available to service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/delegates/{delegateEmail}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsDelegatesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Delegate])
                res.delegate = out

        return res

    
    def gmail_users_settings_delegates_list(self, request: operations.GmailUsersSettingsDelegatesListRequest) -> operations.GmailUsersSettingsDelegatesListResponse:
        r"""Lists the delegates for the specified account. This method is only available to service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/delegates", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsDelegatesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListDelegatesResponse])
                res.list_delegates_response = out

        return res

    
    def gmail_users_settings_filters_create(self, request: operations.GmailUsersSettingsFiltersCreateRequest) -> operations.GmailUsersSettingsFiltersCreateResponse:
        r"""Creates a filter. Note: you can only create a maximum of 1,000 filters.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/filters", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsFiltersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Filter])
                res.filter = out

        return res

    
    def gmail_users_settings_filters_delete(self, request: operations.GmailUsersSettingsFiltersDeleteRequest) -> operations.GmailUsersSettingsFiltersDeleteResponse:
        r"""Immediately and permanently deletes the specified filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/filters/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsFiltersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_settings_filters_get(self, request: operations.GmailUsersSettingsFiltersGetRequest) -> operations.GmailUsersSettingsFiltersGetResponse:
        r"""Gets a filter.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/filters/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsFiltersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Filter])
                res.filter = out

        return res

    
    def gmail_users_settings_filters_list(self, request: operations.GmailUsersSettingsFiltersListRequest) -> operations.GmailUsersSettingsFiltersListResponse:
        r"""Lists the message filters of a Gmail user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/filters", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsFiltersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListFiltersResponse])
                res.list_filters_response = out

        return res

    
    def gmail_users_settings_forwarding_addresses_create(self, request: operations.GmailUsersSettingsForwardingAddressesCreateRequest) -> operations.GmailUsersSettingsForwardingAddressesCreateResponse:
        r"""Creates a forwarding address. If ownership verification is required, a message will be sent to the recipient and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. This method is only available to service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/forwardingAddresses", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsForwardingAddressesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForwardingAddress])
                res.forwarding_address = out

        return res

    
    def gmail_users_settings_forwarding_addresses_delete(self, request: operations.GmailUsersSettingsForwardingAddressesDeleteRequest) -> operations.GmailUsersSettingsForwardingAddressesDeleteResponse:
        r"""Deletes the specified forwarding address and revokes any verification that may have been required. This method is only available to service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsForwardingAddressesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_settings_forwarding_addresses_get(self, request: operations.GmailUsersSettingsForwardingAddressesGetRequest) -> operations.GmailUsersSettingsForwardingAddressesGetResponse:
        r"""Gets the specified forwarding address.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/forwardingAddresses/{forwardingEmail}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsForwardingAddressesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ForwardingAddress])
                res.forwarding_address = out

        return res

    
    def gmail_users_settings_forwarding_addresses_list(self, request: operations.GmailUsersSettingsForwardingAddressesListRequest) -> operations.GmailUsersSettingsForwardingAddressesListResponse:
        r"""Lists the forwarding addresses for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/forwardingAddresses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsForwardingAddressesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListForwardingAddressesResponse])
                res.list_forwarding_addresses_response = out

        return res

    
    def gmail_users_settings_get_auto_forwarding(self, request: operations.GmailUsersSettingsGetAutoForwardingRequest) -> operations.GmailUsersSettingsGetAutoForwardingResponse:
        r"""Gets the auto-forwarding setting for the specified account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/autoForwarding", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsGetAutoForwardingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutoForwarding])
                res.auto_forwarding = out

        return res

    
    def gmail_users_settings_get_imap(self, request: operations.GmailUsersSettingsGetImapRequest) -> operations.GmailUsersSettingsGetImapResponse:
        r"""Gets IMAP settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/imap", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsGetImapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImapSettings])
                res.imap_settings = out

        return res

    
    def gmail_users_settings_get_language(self, request: operations.GmailUsersSettingsGetLanguageRequest) -> operations.GmailUsersSettingsGetLanguageResponse:
        r"""Gets language settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/language", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsGetLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LanguageSettings])
                res.language_settings = out

        return res

    
    def gmail_users_settings_get_pop(self, request: operations.GmailUsersSettingsGetPopRequest) -> operations.GmailUsersSettingsGetPopResponse:
        r"""Gets POP settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/pop", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsGetPopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PopSettings])
                res.pop_settings = out

        return res

    
    def gmail_users_settings_get_vacation(self, request: operations.GmailUsersSettingsGetVacationRequest) -> operations.GmailUsersSettingsGetVacationResponse:
        r"""Gets vacation responder settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/vacation", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsGetVacationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VacationSettings])
                res.vacation_settings = out

        return res

    
    def gmail_users_settings_send_as_create(self, request: operations.GmailUsersSettingsSendAsCreateRequest) -> operations.GmailUsersSettingsSendAsCreateResponse:
        r"""Creates a custom \"from\" send-as alias. If an SMTP MSA is specified, Gmail will attempt to connect to the SMTP service to validate the configuration before creating the alias. If ownership verification is required for the alias, a message will be sent to the email address and the resource's verification status will be set to `pending`; otherwise, the resource will be created with verification status set to `accepted`. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. This method is only available to service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendAs])
                res.send_as = out

        return res

    
    def gmail_users_settings_send_as_delete(self, request: operations.GmailUsersSettingsSendAsDeleteRequest) -> operations.GmailUsersSettingsSendAsDeleteResponse:
        r"""Deletes the specified send-as alias. Revokes any verification that may have been required for using it. This method is only available to service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_settings_send_as_get(self, request: operations.GmailUsersSettingsSendAsGetRequest) -> operations.GmailUsersSettingsSendAsGetResponse:
        r"""Gets the specified send-as alias. Fails with an HTTP 404 error if the specified address is not a member of the collection.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendAs])
                res.send_as = out

        return res

    
    def gmail_users_settings_send_as_list(self, request: operations.GmailUsersSettingsSendAsListRequest) -> operations.GmailUsersSettingsSendAsListResponse:
        r"""Lists the send-as aliases for the specified account. The result includes the primary send-as address associated with the account as well as any custom \"from\" aliases.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSendAsResponse])
                res.list_send_as_response = out

        return res

    
    def gmail_users_settings_send_as_patch(self, request: operations.GmailUsersSettingsSendAsPatchRequest) -> operations.GmailUsersSettingsSendAsPatchResponse:
        r"""Patch the specified send-as alias.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendAs])
                res.send_as = out

        return res

    
    def gmail_users_settings_send_as_smime_info_delete(self, request: operations.GmailUsersSettingsSendAsSmimeInfoDeleteRequest) -> operations.GmailUsersSettingsSendAsSmimeInfoDeleteResponse:
        r"""Deletes the specified S/MIME config for the specified send-as alias.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsSmimeInfoDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_settings_send_as_smime_info_get(self, request: operations.GmailUsersSettingsSendAsSmimeInfoGetRequest) -> operations.GmailUsersSettingsSendAsSmimeInfoGetResponse:
        r"""Gets the specified S/MIME config for the specified send-as alias.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsSmimeInfoGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SmimeInfo])
                res.smime_info = out

        return res

    
    def gmail_users_settings_send_as_smime_info_insert(self, request: operations.GmailUsersSettingsSendAsSmimeInfoInsertRequest) -> operations.GmailUsersSettingsSendAsSmimeInfoInsertResponse:
        r"""Insert (upload) the given S/MIME config for the specified send-as alias. Note that pkcs12 format is required for the key.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsSmimeInfoInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SmimeInfo])
                res.smime_info = out

        return res

    
    def gmail_users_settings_send_as_smime_info_list(self, request: operations.GmailUsersSettingsSendAsSmimeInfoListRequest) -> operations.GmailUsersSettingsSendAsSmimeInfoListResponse:
        r"""Lists S/MIME configs for the specified send-as alias.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsSmimeInfoListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListSmimeInfoResponse])
                res.list_smime_info_response = out

        return res

    
    def gmail_users_settings_send_as_smime_info_set_default(self, request: operations.GmailUsersSettingsSendAsSmimeInfoSetDefaultRequest) -> operations.GmailUsersSettingsSendAsSmimeInfoSetDefaultResponse:
        r"""Sets the default S/MIME config for the specified send-as alias.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/smimeInfo/{id}/setDefault", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsSmimeInfoSetDefaultResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_settings_send_as_update(self, request: operations.GmailUsersSettingsSendAsUpdateRequest) -> operations.GmailUsersSettingsSendAsUpdateResponse:
        r"""Updates a send-as alias. If a signature is provided, Gmail will sanitize the HTML before saving it with the alias. Addresses other than the primary address for the account can only be updated by service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SendAs])
                res.send_as = out

        return res

    
    def gmail_users_settings_send_as_verify(self, request: operations.GmailUsersSettingsSendAsVerifyRequest) -> operations.GmailUsersSettingsSendAsVerifyResponse:
        r"""Sends a verification email to the specified send-as alias address. The verification status must be `pending`. This method is only available to service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/sendAs/{sendAsEmail}/verify", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsSendAsVerifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_settings_update_auto_forwarding(self, request: operations.GmailUsersSettingsUpdateAutoForwardingRequest) -> operations.GmailUsersSettingsUpdateAutoForwardingResponse:
        r"""Updates the auto-forwarding setting for the specified account. A verified forwarding address must be specified when auto-forwarding is enabled. This method is only available to service account clients that have been delegated domain-wide authority.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/autoForwarding", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsUpdateAutoForwardingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AutoForwarding])
                res.auto_forwarding = out

        return res

    
    def gmail_users_settings_update_imap(self, request: operations.GmailUsersSettingsUpdateImapRequest) -> operations.GmailUsersSettingsUpdateImapResponse:
        r"""Updates IMAP settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/imap", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsUpdateImapResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ImapSettings])
                res.imap_settings = out

        return res

    
    def gmail_users_settings_update_language(self, request: operations.GmailUsersSettingsUpdateLanguageRequest) -> operations.GmailUsersSettingsUpdateLanguageResponse:
        r"""Updates language settings. If successful, the return object contains the `displayLanguage` that was saved for the user, which may differ from the value passed into the request. This is because the requested `displayLanguage` may not be directly supported by Gmail but have a close variant that is, and so the variant may be chosen and saved instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/language", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsUpdateLanguageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LanguageSettings])
                res.language_settings = out

        return res

    
    def gmail_users_settings_update_pop(self, request: operations.GmailUsersSettingsUpdatePopRequest) -> operations.GmailUsersSettingsUpdatePopResponse:
        r"""Updates POP settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/pop", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsUpdatePopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PopSettings])
                res.pop_settings = out

        return res

    
    def gmail_users_settings_update_vacation(self, request: operations.GmailUsersSettingsUpdateVacationRequest) -> operations.GmailUsersSettingsUpdateVacationResponse:
        r"""Updates vacation responder settings.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/settings/vacation", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersSettingsUpdateVacationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VacationSettings])
                res.vacation_settings = out

        return res

    
    def gmail_users_stop(self, request: operations.GmailUsersStopRequest) -> operations.GmailUsersStopResponse:
        r"""Stop receiving push notifications for the given user mailbox.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/stop", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_threads_delete(self, request: operations.GmailUsersThreadsDeleteRequest) -> operations.GmailUsersThreadsDeleteResponse:
        r"""Immediately and permanently deletes the specified thread. Any messages that belong to the thread are also deleted. This operation cannot be undone. Prefer `threads.trash` instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/threads/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersThreadsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def gmail_users_threads_get(self, request: operations.GmailUsersThreadsGetRequest) -> operations.GmailUsersThreadsGetResponse:
        r"""Gets the specified thread.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/threads/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersThreadsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Thread])
                res.thread = out

        return res

    
    def gmail_users_threads_list(self, request: operations.GmailUsersThreadsListRequest) -> operations.GmailUsersThreadsListResponse:
        r"""Lists the threads in the user's mailbox.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/threads", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersThreadsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListThreadsResponse])
                res.list_threads_response = out

        return res

    
    def gmail_users_threads_modify(self, request: operations.GmailUsersThreadsModifyRequest) -> operations.GmailUsersThreadsModifyResponse:
        r"""Modifies the labels applied to the thread. This applies to all messages in the thread.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/threads/{id}/modify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersThreadsModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Thread])
                res.thread = out

        return res

    
    def gmail_users_threads_trash(self, request: operations.GmailUsersThreadsTrashRequest) -> operations.GmailUsersThreadsTrashResponse:
        r"""Moves the specified thread to the trash. Any messages that belong to the thread are also moved to the trash.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/threads/{id}/trash", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersThreadsTrashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Thread])
                res.thread = out

        return res

    
    def gmail_users_threads_untrash(self, request: operations.GmailUsersThreadsUntrashRequest) -> operations.GmailUsersThreadsUntrashResponse:
        r"""Removes the specified thread from the trash. Any messages that belong to the thread are also removed from the trash.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/threads/{id}/untrash", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersThreadsUntrashResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Thread])
                res.thread = out

        return res

    
    def gmail_users_watch(self, request: operations.GmailUsersWatchRequest) -> operations.GmailUsersWatchResponse:
        r"""Set up or update a push notification watch on the given user mailbox.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/gmail/v1/users/{userId}/watch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GmailUsersWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.WatchResponse])
                res.watch_response = out

        return res

    