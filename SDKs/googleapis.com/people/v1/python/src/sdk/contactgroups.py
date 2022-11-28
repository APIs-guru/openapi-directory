import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class ContactGroups:
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

    
    def people_contact_groups_batch_get(self, request: operations.PeopleContactGroupsBatchGetRequest) -> operations.PeopleContactGroupsBatchGetResponse:
        r"""Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/contactGroups:batchGet"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleContactGroupsBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BatchGetContactGroupsResponse])
                res.batch_get_contact_groups_response = out

        return res

    
    def people_contact_groups_create(self, request: operations.PeopleContactGroupsCreateRequest) -> operations.PeopleContactGroupsCreateResponse:
        r"""Create a new contact group owned by the authenticated user. Created contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/contactGroups"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleContactGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContactGroup])
                res.contact_group = out

        return res

    
    def people_contact_groups_delete(self, request: operations.PeopleContactGroupsDeleteRequest) -> operations.PeopleContactGroupsDeleteResponse:
        r"""Delete an existing contact group owned by the authenticated user by specifying a contact group resource name. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resourceName}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleContactGroupsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    def people_contact_groups_list(self, request: operations.PeopleContactGroupsListRequest) -> operations.PeopleContactGroupsListResponse:
        r"""List all contact groups owned by the authenticated user. Members of the contact groups are not populated.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/contactGroups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleContactGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListContactGroupsResponse])
                res.list_contact_groups_response = out

        return res

    
    def people_contact_groups_members_modify(self, request: operations.PeopleContactGroupsMembersModifyRequest) -> operations.PeopleContactGroupsMembersModifyResponse:
        r"""Modify the members of a contact group owned by the authenticated user. The only system contact groups that can have members added are `contactGroups/myContacts` and `contactGroups/starred`. Other system contact groups are deprecated and can only have contacts removed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resourceName}/members:modify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleContactGroupsMembersModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModifyContactGroupMembersResponse])
                res.modify_contact_group_members_response = out

        return res

    
    def people_contact_groups_update(self, request: operations.PeopleContactGroupsUpdateRequest) -> operations.PeopleContactGroupsUpdateResponse:
        r"""Update the name of an existing contact group owned by the authenticated user. Updated contact group names must be unique to the users contact groups. Attempting to create a group with a duplicate name will return a HTTP 409 error. Mutate requests for the same user should be sent sequentially to avoid increased latency and failures.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{resourceName}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PeopleContactGroupsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ContactGroup])
                res.contact_group = out

        return res

    