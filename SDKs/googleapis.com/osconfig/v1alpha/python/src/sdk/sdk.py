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
    
    
    def osconfig_projects_locations_instance_os_policies_compliances_list(self, request: operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListRequest) -> operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/instanceOSPoliciesCompliances", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsInstanceOsPoliciesCompliancesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInstanceOsPoliciesCompliancesResponse])
                res.list_instance_os_policies_compliances_response = out

        return res

    
    
    def osconfig_projects_locations_instances_inventories_list(self, request: operations.OsconfigProjectsLocationsInstancesInventoriesListRequest) -> operations.OsconfigProjectsLocationsInstancesInventoriesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/inventories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsInstancesInventoriesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListInventoriesResponse])
                res.list_inventories_response = out

        return res

    
    
    def osconfig_projects_locations_instances_os_policy_assignments_reports_list(self, request: operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListRequest) -> operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsInstancesOsPolicyAssignmentsReportsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOsPolicyAssignmentReportsResponse])
                res.list_os_policy_assignment_reports_response = out

        return res

    
    
    def osconfig_projects_locations_instances_vulnerability_reports_list(self, request: operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListRequest) -> operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/vulnerabilityReports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsInstancesVulnerabilityReportsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVulnerabilityReportsResponse])
                res.list_vulnerability_reports_response = out

        return res

    
    
    def osconfig_projects_locations_os_policy_assignments_create(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/osPolicyAssignments", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def osconfig_projects_locations_os_policy_assignments_delete(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def osconfig_projects_locations_os_policy_assignments_list(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{parent}/osPolicyAssignments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOsPolicyAssignmentsResponse])
                res.list_os_policy_assignments_response = out

        return res

    
    
    def osconfig_projects_locations_os_policy_assignments_list_revisions(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:listRevisions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsListRevisionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOsPolicyAssignmentRevisionsResponse])
                res.list_os_policy_assignment_revisions_response = out

        return res

    
    
    def osconfig_projects_locations_os_policy_assignments_operations_cancel(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}:cancel", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.empty = out

        return res

    
    
    def osconfig_projects_locations_os_policy_assignments_operations_get(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    
    
    def osconfig_projects_locations_os_policy_assignments_patch(self, request: operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchRequest) -> operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1alpha/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.OsconfigProjectsLocationsOsPolicyAssignmentsPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Operation])
                res.operation = out

        return res

    