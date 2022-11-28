import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ACL:
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

    
    def calendar_acl_delete(self, request: operations.CalendarACLDeleteRequest) -> operations.CalendarACLDeleteResponse:
        r"""Deletes an access control rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl/{ruleId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def calendar_acl_get(self, request: operations.CalendarACLGetRequest) -> operations.CalendarACLGetResponse:
        r"""Returns an access control rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl/{ruleId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ACLRule])
                res.acl_rule = out

        return res

    
    def calendar_acl_insert(self, request: operations.CalendarACLInsertRequest) -> operations.CalendarACLInsertResponse:
        r"""Creates an access control rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ACLRule])
                res.acl_rule = out

        return res

    
    def calendar_acl_list(self, request: operations.CalendarACLListRequest) -> operations.CalendarACLListResponse:
        r"""Returns the rules in the access control list for the calendar.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ACL])
                res.acl = out

        return res

    
    def calendar_acl_patch(self, request: operations.CalendarACLPatchRequest) -> operations.CalendarACLPatchResponse:
        r"""Updates an access control rule. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl/{ruleId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ACLRule])
                res.acl_rule = out

        return res

    
    def calendar_acl_update(self, request: operations.CalendarACLUpdateRequest) -> operations.CalendarACLUpdateResponse:
        r"""Updates an access control rule.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl/{ruleId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ACLRule])
                res.acl_rule = out

        return res

    
    def calendar_acl_watch(self, request: operations.CalendarACLWatchRequest) -> operations.CalendarACLWatchResponse:
        r"""Watch for changes to ACL resources.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/calendars/{calendarId}/acl/watch", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CalendarACLWatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Channel])
                res.channel = out

        return res

    