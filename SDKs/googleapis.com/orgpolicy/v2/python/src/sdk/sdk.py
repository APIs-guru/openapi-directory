import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://orgpolicy.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def orgpolicy_organizations_custom_constraints_create(self, request: operations.OrgpolicyOrganizationsCustomConstraintsCreateRequest) -> operations.OrgpolicyOrganizationsCustomConstraintsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/customConstraints", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyOrganizationsCustomConstraintsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2CustomConstraint])
                res.google_cloud_orgpolicy_v2_custom_constraint = out

        return res

    
    
    def orgpolicy_organizations_custom_constraints_list(self, request: operations.OrgpolicyOrganizationsCustomConstraintsListRequest) -> operations.OrgpolicyOrganizationsCustomConstraintsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/customConstraints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyOrganizationsCustomConstraintsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2ListCustomConstraintsResponse])
                res.google_cloud_orgpolicy_v2_list_custom_constraints_response = out

        return res

    
    
    def orgpolicy_projects_constraints_list(self, request: operations.OrgpolicyProjectsConstraintsListRequest) -> operations.OrgpolicyProjectsConstraintsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/constraints", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsConstraintsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2ListConstraintsResponse])
                res.google_cloud_orgpolicy_v2_list_constraints_response = out

        return res

    
    
    def orgpolicy_projects_policies_create(self, request: operations.OrgpolicyProjectsPoliciesCreateRequest) -> operations.OrgpolicyProjectsPoliciesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/policies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2Policy])
                res.google_cloud_orgpolicy_v2_policy = out

        return res

    
    
    def orgpolicy_projects_policies_delete(self, request: operations.OrgpolicyProjectsPoliciesDeleteRequest) -> operations.OrgpolicyProjectsPoliciesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def orgpolicy_projects_policies_get(self, request: operations.OrgpolicyProjectsPoliciesGetRequest) -> operations.OrgpolicyProjectsPoliciesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2Policy])
                res.google_cloud_orgpolicy_v2_policy = out

        return res

    
    
    def orgpolicy_projects_policies_get_effective_policy(self, request: operations.OrgpolicyProjectsPoliciesGetEffectivePolicyRequest) -> operations.OrgpolicyProjectsPoliciesGetEffectivePolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}:getEffectivePolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesGetEffectivePolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2Policy])
                res.google_cloud_orgpolicy_v2_policy = out

        return res

    
    
    def orgpolicy_projects_policies_list(self, request: operations.OrgpolicyProjectsPoliciesListRequest) -> operations.OrgpolicyProjectsPoliciesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{parent}/policies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2ListPoliciesResponse])
                res.google_cloud_orgpolicy_v2_list_policies_response = out

        return res

    
    
    def orgpolicy_projects_policies_patch(self, request: operations.OrgpolicyProjectsPoliciesPatchRequest) -> operations.OrgpolicyProjectsPoliciesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v2/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OrgpolicyProjectsPoliciesPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudOrgpolicyV2Policy])
                res.google_cloud_orgpolicy_v2_policy = out

        return res

    