import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Conversation:
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

    
    def create_conversation(self, request: operations.CreateConversationRequest) -> operations.CreateConversationResponse:
        r"""Create a conversation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateConversation200ApplicationJSON])
                res.create_conversation_200_application_json_object = out

        return res

    
    def delete_conversation(self, request: operations.DeleteConversationRequest) -> operations.DeleteConversationResponse:
        r"""Delete a conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_conversation_200_application_json_object = out

        return res

    
    def list_conversations(self, request: operations.ListConversationsRequest) -> operations.ListConversationsResponse:
        r"""List conversations
        This endpoint is **DEPRECATED**. Please use [/v0.2/conversations](/api/conversation.v2#get-conversations).
        
        List all conversations associated with your application. This endpoint required an admin JWT. To find all conversations for the currently logged in user, see [GET /users/:id/conversations](#getuserConversations)
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/conversations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListConversationsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListConversations200ApplicationJSON])
                res.list_conversations_200_application_json_object = out

        return res

    
    def record_conversation(self, request: operations.RecordConversationRequest) -> operations.RecordConversationResponse:
        r"""Record a conversation
        """
        
        base_url = operations.RECORD_CONVERSATION_SERVERS[0]
        if request.server_url is not None:
            base_url = request.server_url
        
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}/record", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def replace_conversation(self, request: operations.ReplaceConversationRequest) -> operations.ReplaceConversationResponse:
        r"""Update a conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ReplaceConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ReplaceConversation200ApplicationJSON])
                res.replace_conversation_200_application_json_object = out

        return res

    
    def retrieve_conversation(self, request: operations.RetrieveConversationRequest) -> operations.RetrieveConversationResponse:
        r"""Retrieve a conversation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/conversations/{conversation_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveConversationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrieveConversation200ApplicationJSON])
                res.retrieve_conversation_200_application_json_object = out

        return res

    