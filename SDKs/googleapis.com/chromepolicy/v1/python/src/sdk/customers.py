import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Customers:
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

    
    def chromepolicy_customers_policies_groups_batch_delete(self, request: operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest) -> operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse:
        r"""Delete multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies/groups:batchDelete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def chromepolicy_customers_policies_groups_batch_modify(self, request: operations.ChromepolicyCustomersPoliciesGroupsBatchModifyRequest) -> operations.ChromepolicyCustomersPoliciesGroupsBatchModifyResponse:
        r"""Modify multiple policy values that are applied to a specific group. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies/groups:batchModify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesGroupsBatchModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def chromepolicy_customers_policies_groups_list_group_priority_ordering(self, request: operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest) -> operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse:
        r"""Retrieve a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies/groups:listGroupPriorityOrdering", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse])
                res.google_chrome_policy_versions_v1_list_group_priority_ordering_response = out

        return res

    
    def chromepolicy_customers_policies_groups_update_group_priority_ordering(self, request: operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest) -> operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingResponse:
        r"""Update a group priority ordering for an app. The target app must be supplied in `additionalTargetKeyNames` in the PolicyTargetKey. On failure the request will return the error details as part of the google.rpc.Status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies/groups:updateGroupPriorityOrdering", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def chromepolicy_customers_policies_networks_define_certificate(self, request: operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest) -> operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateResponse:
        r"""Creates a certificate at a specified OU for a customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies/networks:defineCertificate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1DefineCertificateResponse])
                res.google_chrome_policy_versions_v1_define_certificate_response = out

        return res

    
    def chromepolicy_customers_policies_networks_define_network(self, request: operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest) -> operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkResponse:
        r"""Define a new network.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies/networks:defineNetwork", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1DefineNetworkResponse])
                res.google_chrome_policy_versions_v1_define_network_response = out

        return res

    
    def chromepolicy_customers_policies_networks_remove_certificate(self, request: operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest) -> operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateResponse:
        r"""Remove an existing certificate by guid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies/networks:removeCertificate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_chrome_policy_versions_v1_remove_certificate_response = out

        return res

    
    def chromepolicy_customers_policies_networks_remove_network(self, request: operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest) -> operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse:
        r"""Remove an existing network by guid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies/networks:removeNetwork", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_chrome_policy_versions_v1_remove_network_response = out

        return res

    
    def chromepolicy_customers_policies_orgunits_batch_inherit(self, request: operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest) -> operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse:
        r"""Modify multiple policy values that are applied to a specific org unit so that they now inherit the value from a parent (if applicable). All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies/orgunits:batchInherit", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def chromepolicy_customers_policies_orgunits_batch_modify(self, request: operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest) -> operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse:
        r"""Modify multiple policy values that are applied to a specific org unit. All targets must have the same target format. That is to say that they must point to the same target resource and must have the same keys specified in `additionalTargetKeyNames`, though the values for those keys may be different. On failure the request will return the error details as part of the google.rpc.Status.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies/orgunits:batchModify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def chromepolicy_customers_policies_resolve(self, request: operations.ChromepolicyCustomersPoliciesResolveRequest) -> operations.ChromepolicyCustomersPoliciesResolveResponse:
        r"""Gets the resolved policy values for a list of policies that match a search query.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{customer}/policies:resolve", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesResolveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1ResolveResponse])
                res.google_chrome_policy_versions_v1_resolve_response = out

        return res

    
    def chromepolicy_customers_policy_schemas_get(self, request: operations.ChromepolicyCustomersPolicySchemasGetRequest) -> operations.ChromepolicyCustomersPolicySchemasGetResponse:
        r"""Get a specific policy schema for a customer by its resource name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPolicySchemasGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1PolicySchema])
                res.google_chrome_policy_versions_v1_policy_schema = out

        return res

    
    def chromepolicy_customers_policy_schemas_list(self, request: operations.ChromepolicyCustomersPolicySchemasListRequest) -> operations.ChromepolicyCustomersPolicySchemasListResponse:
        r"""Gets a list of policy schemas that match a specified filter value for a given customer.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/policySchemas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPolicySchemasListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1ListPolicySchemasResponse])
                res.google_chrome_policy_versions_v1_list_policy_schemas_response = out

        return res

    