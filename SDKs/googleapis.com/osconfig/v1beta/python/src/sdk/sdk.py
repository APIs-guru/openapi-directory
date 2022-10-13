import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://osconfig.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def osconfig_projects_guest_policies_create(self, request: operations.OsconfigProjectsGuestPoliciesCreateRequest) -> operations.OsconfigProjectsGuestPoliciesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/guestPolicies", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsGuestPoliciesCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GuestPolicy])
                res.guest_policy = out

        return res

    
    
    def osconfig_projects_guest_policies_list(self, request: operations.OsconfigProjectsGuestPoliciesListRequest) -> operations.OsconfigProjectsGuestPoliciesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/guestPolicies", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsGuestPoliciesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGuestPoliciesResponse])
                res.list_guest_policies_response = out

        return res

    
    
    def osconfig_projects_patch_deployments_create(self, request: operations.OsconfigProjectsPatchDeploymentsCreateRequest) -> operations.OsconfigProjectsPatchDeploymentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/patchDeployments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchDeployment])
                res.patch_deployment = out

        return res

    
    
    def osconfig_projects_patch_deployments_delete(self, request: operations.OsconfigProjectsPatchDeploymentsDeleteRequest) -> operations.OsconfigProjectsPatchDeploymentsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def osconfig_projects_patch_deployments_list(self, request: operations.OsconfigProjectsPatchDeploymentsListRequest) -> operations.OsconfigProjectsPatchDeploymentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/patchDeployments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPatchDeploymentsResponse])
                res.list_patch_deployments_response = out

        return res

    
    
    def osconfig_projects_patch_deployments_patch(self, request: operations.OsconfigProjectsPatchDeploymentsPatchRequest) -> operations.OsconfigProjectsPatchDeploymentsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchDeployment])
                res.patch_deployment = out

        return res

    
    
    def osconfig_projects_patch_deployments_pause(self, request: operations.OsconfigProjectsPatchDeploymentsPauseRequest) -> operations.OsconfigProjectsPatchDeploymentsPauseResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{name}:pause", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsPauseResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchDeployment])
                res.patch_deployment = out

        return res

    
    
    def osconfig_projects_patch_deployments_resume(self, request: operations.OsconfigProjectsPatchDeploymentsResumeRequest) -> operations.OsconfigProjectsPatchDeploymentsResumeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{name}:resume", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchDeploymentsResumeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchDeployment])
                res.patch_deployment = out

        return res

    
    
    def osconfig_projects_patch_jobs_cancel(self, request: operations.OsconfigProjectsPatchJobsCancelRequest) -> operations.OsconfigProjectsPatchJobsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{name}:cancel", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchJobsCancelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchJob])
                res.patch_job = out

        return res

    
    
    def osconfig_projects_patch_jobs_execute(self, request: operations.OsconfigProjectsPatchJobsExecuteRequest) -> operations.OsconfigProjectsPatchJobsExecuteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/patchJobs:execute", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchJobsExecuteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchJob])
                res.patch_job = out

        return res

    
    
    def osconfig_projects_patch_jobs_get(self, request: operations.OsconfigProjectsPatchJobsGetRequest) -> operations.OsconfigProjectsPatchJobsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchJobsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PatchJob])
                res.patch_job = out

        return res

    
    
    def osconfig_projects_patch_jobs_instance_details_list(self, request: operations.OsconfigProjectsPatchJobsInstanceDetailsListRequest) -> operations.OsconfigProjectsPatchJobsInstanceDetailsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/instanceDetails", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchJobsInstanceDetailsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPatchJobInstanceDetailsResponse])
                res.list_patch_job_instance_details_response = out

        return res

    
    
    def osconfig_projects_patch_jobs_list(self, request: operations.OsconfigProjectsPatchJobsListRequest) -> operations.OsconfigProjectsPatchJobsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/patchJobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsPatchJobsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListPatchJobsResponse])
                res.list_patch_jobs_response = out

        return res

    
    
    def osconfig_projects_zones_instances_lookup_effective_guest_policy(self, request: operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyRequest) -> operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{instance}:lookupEffectiveGuestPolicy", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsZonesInstancesLookupEffectiveGuestPolicyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EffectiveGuestPolicy])
                res.effective_guest_policy = out

        return res

    