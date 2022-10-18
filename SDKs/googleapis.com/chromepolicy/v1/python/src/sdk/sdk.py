import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://chromepolicy.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def chromepolicy_customers_policies_groups_batch_delete(self, request: operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteRequest) -> operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/groups:batchDelete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesGroupsBatchDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def chromepolicy_customers_policies_groups_batch_modify(self, request: operations.ChromepolicyCustomersPoliciesGroupsBatchModifyRequest) -> operations.ChromepolicyCustomersPoliciesGroupsBatchModifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/groups:batchModify", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesGroupsBatchModifyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def chromepolicy_customers_policies_groups_list_group_priority_ordering(self, request: operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingRequest) -> operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/groups:listGroupPriorityOrdering", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesGroupsListGroupPriorityOrderingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse])
                res.google_chrome_policy_versions_v1_list_group_priority_ordering_response = out

        return res

    
    
    def chromepolicy_customers_policies_groups_update_group_priority_ordering(self, request: operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingRequest) -> operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/groups:updateGroupPriorityOrdering", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesGroupsUpdateGroupPriorityOrderingResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def chromepolicy_customers_policies_networks_define_certificate(self, request: operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateRequest) -> operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/networks:defineCertificate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesNetworksDefineCertificateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1DefineCertificateResponse])
                res.google_chrome_policy_versions_v1_define_certificate_response = out

        return res

    
    
    def chromepolicy_customers_policies_networks_define_network(self, request: operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkRequest) -> operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/networks:defineNetwork", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesNetworksDefineNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1DefineNetworkResponse])
                res.google_chrome_policy_versions_v1_define_network_response = out

        return res

    
    
    def chromepolicy_customers_policies_networks_remove_certificate(self, request: operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateRequest) -> operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/networks:removeCertificate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesNetworksRemoveCertificateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_chrome_policy_versions_v1_remove_certificate_response = out

        return res

    
    
    def chromepolicy_customers_policies_networks_remove_network(self, request: operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkRequest) -> operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/networks:removeNetwork", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesNetworksRemoveNetworkResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_chrome_policy_versions_v1_remove_network_response = out

        return res

    
    
    def chromepolicy_customers_policies_orgunits_batch_inherit(self, request: operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritRequest) -> operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/orgunits:batchInherit", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesOrgunitsBatchInheritResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def chromepolicy_customers_policies_orgunits_batch_modify(self, request: operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyRequest) -> operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/orgunits:batchModify", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesOrgunitsBatchModifyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def chromepolicy_customers_policies_resolve(self, request: operations.ChromepolicyCustomersPoliciesResolveRequest) -> operations.ChromepolicyCustomersPoliciesResolveResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies:resolve", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPoliciesResolveResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1ResolveResponse])
                res.google_chrome_policy_versions_v1_resolve_response = out

        return res

    
    
    def chromepolicy_customers_policy_schemas_get(self, request: operations.ChromepolicyCustomersPolicySchemasGetRequest) -> operations.ChromepolicyCustomersPolicySchemasGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPolicySchemasGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1PolicySchema])
                res.google_chrome_policy_versions_v1_policy_schema = out

        return res

    
    
    def chromepolicy_customers_policy_schemas_list(self, request: operations.ChromepolicyCustomersPolicySchemasListRequest) -> operations.ChromepolicyCustomersPolicySchemasListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/policySchemas", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyCustomersPolicySchemasListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1ListPolicySchemasResponse])
                res.google_chrome_policy_versions_v1_list_policy_schemas_response = out

        return res

    
    
    def chromepolicy_media_upload(self, request: operations.ChromepolicyMediaUploadRequest) -> operations.ChromepolicyMediaUploadResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{customer}/policies/files:uploadPolicyFile", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ChromepolicyMediaUploadResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleChromePolicyVersionsV1UploadPolicyFileResponse])
                res.google_chrome_policy_versions_v1_upload_policy_file_response = out

        return res

    