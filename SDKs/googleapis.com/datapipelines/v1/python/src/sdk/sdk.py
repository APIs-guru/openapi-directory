import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://datapipelines.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
            
    

    
    def datapipelines_projects_locations_list_pipelines(self, request: operations.DatapipelinesProjectsLocationsListPipelinesRequest) -> operations.DatapipelinesProjectsLocationsListPipelinesResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatapipelinesProjectsLocationsListPipelinesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatapipelinesV1ListPipelinesResponse])
                res.google_cloud_datapipelines_v1_list_pipelines_response = out

        return res

    
    def datapipelines_projects_locations_pipelines_create(self, request: operations.DatapipelinesProjectsLocationsPipelinesCreateRequest) -> operations.DatapipelinesProjectsLocationsPipelinesCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/pipelines", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatapipelinesProjectsLocationsPipelinesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatapipelinesV1Pipeline])
                res.google_cloud_datapipelines_v1_pipeline = out

        return res

    
    def datapipelines_projects_locations_pipelines_delete(self, request: operations.DatapipelinesProjectsLocationsPipelinesDeleteRequest) -> operations.DatapipelinesProjectsLocationsPipelinesDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatapipelinesProjectsLocationsPipelinesDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def datapipelines_projects_locations_pipelines_get(self, request: operations.DatapipelinesProjectsLocationsPipelinesGetRequest) -> operations.DatapipelinesProjectsLocationsPipelinesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatapipelinesProjectsLocationsPipelinesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatapipelinesV1Pipeline])
                res.google_cloud_datapipelines_v1_pipeline = out

        return res

    
    def datapipelines_projects_locations_pipelines_jobs_list(self, request: operations.DatapipelinesProjectsLocationsPipelinesJobsListRequest) -> operations.DatapipelinesProjectsLocationsPipelinesJobsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/jobs", request.path_params)

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatapipelinesProjectsLocationsPipelinesJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatapipelinesV1ListJobsResponse])
                res.google_cloud_datapipelines_v1_list_jobs_response = out

        return res

    
    def datapipelines_projects_locations_pipelines_patch(self, request: operations.DatapipelinesProjectsLocationsPipelinesPatchRequest) -> operations.DatapipelinesProjectsLocationsPipelinesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatapipelinesProjectsLocationsPipelinesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatapipelinesV1Pipeline])
                res.google_cloud_datapipelines_v1_pipeline = out

        return res

    
    def datapipelines_projects_locations_pipelines_run(self, request: operations.DatapipelinesProjectsLocationsPipelinesRunRequest) -> operations.DatapipelinesProjectsLocationsPipelinesRunResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:run", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatapipelinesProjectsLocationsPipelinesRunResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatapipelinesV1RunPipelineResponse])
                res.google_cloud_datapipelines_v1_run_pipeline_response = out

        return res

    
    def datapipelines_projects_locations_pipelines_stop(self, request: operations.DatapipelinesProjectsLocationsPipelinesStopRequest) -> operations.DatapipelinesProjectsLocationsPipelinesStopResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:stop", request.path_params)

        headers = {}

        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type

        query_params = utils.get_query_params(request.query_params)

        client = utils.configure_security_client(request.security)

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatapipelinesProjectsLocationsPipelinesStopResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatapipelinesV1Pipeline])
                res.google_cloud_datapipelines_v1_pipeline = out

        return res

    