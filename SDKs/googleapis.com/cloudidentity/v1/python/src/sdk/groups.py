import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Groups:
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

    
    def cloudidentity_groups_create(self, request: operations.CloudidentityGroupsCreateRequest) -> operations.CloudidentityGroupsCreateResponse:
        r"""Creates a Group.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/groups"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_groups_list(self, request: operations.CloudidentityGroupsListRequest) -> operations.CloudidentityGroupsListResponse:
        r"""Lists the `Group` resources under a customer or namespace.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/groups"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGroupsResponse])
                res.list_groups_response = out

        return res

    
    def cloudidentity_groups_lookup(self, request: operations.CloudidentityGroupsLookupRequest) -> operations.CloudidentityGroupsLookupResponse:
        r"""Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Group` by its `EntityKey`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/groups:lookup"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LookupGroupNameResponse])
                res.lookup_group_name_response = out

        return res

    
    def cloudidentity_groups_memberships_check_transitive_membership(self, request: operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipRequest) -> operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse:
        r"""Check a potential member for membership in a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A member has membership to a group as long as there is a single viewable transitive membership between the group and the member. The actor must have view permissions to at least one transitive membership between the member and group.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/memberships:checkTransitiveMembership", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsMembershipsCheckTransitiveMembershipResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CheckTransitiveMembershipResponse])
                res.check_transitive_membership_response = out

        return res

    
    def cloudidentity_groups_memberships_create(self, request: operations.CloudidentityGroupsMembershipsCreateRequest) -> operations.CloudidentityGroupsMembershipsCreateResponse:
        r"""Creates a `Membership`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/memberships", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsMembershipsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_groups_memberships_delete(self, request: operations.CloudidentityGroupsMembershipsDeleteRequest) -> operations.CloudidentityGroupsMembershipsDeleteResponse:
        r"""Deletes a `Membership`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsMembershipsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_groups_memberships_get(self, request: operations.CloudidentityGroupsMembershipsGetRequest) -> operations.CloudidentityGroupsMembershipsGetResponse:
        r"""Retrieves a `Membership`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsMembershipsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Membership])
                res.membership = out

        return res

    
    def cloudidentity_groups_memberships_get_membership_graph(self, request: operations.CloudidentityGroupsMembershipsGetMembershipGraphRequest) -> operations.CloudidentityGroupsMembershipsGetMembershipGraphResponse:
        r"""Get a membership graph of just a member or both a member and a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. Given a member, the response will contain all membership paths from the member. Given both a group and a member, the response will contain all membership paths between the group and the member.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/memberships:getMembershipGraph", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsMembershipsGetMembershipGraphResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    def cloudidentity_groups_memberships_list(self, request: operations.CloudidentityGroupsMembershipsListRequest) -> operations.CloudidentityGroupsMembershipsListResponse:
        r"""Lists the `Membership`s within a `Group`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/memberships", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsMembershipsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListMembershipsResponse])
                res.list_memberships_response = out

        return res

    
    def cloudidentity_groups_memberships_lookup(self, request: operations.CloudidentityGroupsMembershipsLookupRequest) -> operations.CloudidentityGroupsMembershipsLookupResponse:
        r"""Looks up the [resource name](https://cloud.google.com/apis/design/resource_names) of a `Membership` by its `EntityKey`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/memberships:lookup", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsMembershipsLookupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LookupMembershipNameResponse])
                res.lookup_membership_name_response = out

        return res

    
    def cloudidentity_groups_memberships_modify_membership_roles(self, request: operations.CloudidentityGroupsMembershipsModifyMembershipRolesRequest) -> operations.CloudidentityGroupsMembershipsModifyMembershipRolesResponse:
        r"""Modifies the `MembershipRole`s of a `Membership`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:modifyMembershipRoles", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsMembershipsModifyMembershipRolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModifyMembershipRolesResponse])
                res.modify_membership_roles_response = out

        return res

    
    def cloudidentity_groups_memberships_search_transitive_groups(self, request: operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsRequest) -> operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse:
        r"""Search transitive groups of a member. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the member is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive group is any group that has a direct or indirect membership to the member. Actor must have view permissions all transitive groups.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/memberships:searchTransitiveGroups", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsMembershipsSearchTransitiveGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchTransitiveGroupsResponse])
                res.search_transitive_groups_response = out

        return res

    
    def cloudidentity_groups_memberships_search_transitive_memberships(self, request: operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsRequest) -> operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse:
        r"""Search transitive memberships of a group. **Note:** This feature is only available to Google Workspace Enterprise Standard, Enterprise Plus, and Enterprise for Education; and Cloud Identity Premium accounts. If the account of the group is not one of these, a 403 (PERMISSION_DENIED) HTTP status code will be returned. A transitive membership is any direct or indirect membership of a group. Actor must have view permissions to all transitive memberships.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/memberships:searchTransitiveMemberships", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsMembershipsSearchTransitiveMembershipsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchTransitiveMembershipsResponse])
                res.search_transitive_memberships_response = out

        return res

    
    def cloudidentity_groups_search(self, request: operations.CloudidentityGroupsSearchRequest) -> operations.CloudidentityGroupsSearchResponse:
        r"""Searches for `Group` resources matching a specified query.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/groups:search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SearchGroupsResponse])
                res.search_groups_response = out

        return res

    
    def cloudidentity_groups_update_security_settings(self, request: operations.CloudidentityGroupsUpdateSecuritySettingsRequest) -> operations.CloudidentityGroupsUpdateSecuritySettingsResponse:
        r"""Update Security Settings
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudidentityGroupsUpdateSecuritySettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    