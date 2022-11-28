import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def documentai_projects_locations_fetch_processor_types(self, request: operations.DocumentaiProjectsLocationsFetchProcessorTypesRequest) -> operations.DocumentaiProjectsLocationsFetchProcessorTypesResponse:
        r"""Fetches processor types. Note that we do not use ListProcessorTypes here because it is not paginated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{parent}:fetchProcessorTypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsFetchProcessorTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse])
                res.google_cloud_documentai_v1beta3_fetch_processor_types_response = out

        return res

    
    def documentai_projects_locations_list(self, request: operations.DocumentaiProjectsLocationsListRequest) -> operations.DocumentaiProjectsLocationsListResponse:
        r"""Lists information about the supported locations for this service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{name}/locations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudLocationListLocationsResponse])
                res.google_cloud_location_list_locations_response = out

        return res

    
    def documentai_projects_locations_operations_cancel(self, request: operations.DocumentaiProjectsLocationsOperationsCancelRequest) -> operations.DocumentaiProjectsLocationsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{name}:cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def documentai_projects_locations_processor_types_list(self, request: operations.DocumentaiProjectsLocationsProcessorTypesListRequest) -> operations.DocumentaiProjectsLocationsProcessorTypesListResponse:
        r"""Lists the processor types that exist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{parent}/processorTypes", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorTypesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse])
                res.google_cloud_documentai_v1beta3_list_processor_types_response = out

        return res

    
    def documentai_projects_locations_processors_create(self, request: operations.DocumentaiProjectsLocationsProcessorsCreateRequest) -> operations.DocumentaiProjectsLocationsProcessorsCreateResponse:
        r"""Creates a processor from the type processor that the user chose. The processor will be at \"ENABLED\" state by default after its creation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{parent}/processors", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDocumentaiV1beta3Processor])
                res.google_cloud_documentai_v1beta3_processor = out

        return res

    
    def documentai_projects_locations_processors_disable(self, request: operations.DocumentaiProjectsLocationsProcessorsDisableRequest) -> operations.DocumentaiProjectsLocationsProcessorsDisableResponse:
        r"""Disables a processor
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{name}:disable", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsDisableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def documentai_projects_locations_processors_enable(self, request: operations.DocumentaiProjectsLocationsProcessorsEnableRequest) -> operations.DocumentaiProjectsLocationsProcessorsEnableResponse:
        r"""Enables a processor
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{name}:enable", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsEnableResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def documentai_projects_locations_processors_human_review_config_review_document(self, request: operations.DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentRequest) -> operations.DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse:
        r"""Send a document for Human Review. The input document should be processed by the specified processor.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{humanReviewConfig}:reviewDocument", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsHumanReviewConfigReviewDocumentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def documentai_projects_locations_processors_list(self, request: operations.DocumentaiProjectsLocationsProcessorsListRequest) -> operations.DocumentaiProjectsLocationsProcessorsListResponse:
        r"""Lists all processors which belong to this project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{parent}/processors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDocumentaiV1beta3ListProcessorsResponse])
                res.google_cloud_documentai_v1beta3_list_processors_response = out

        return res

    
    def documentai_projects_locations_processors_processor_versions_batch_process(self, request: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessRequest) -> operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessResponse:
        r"""LRO endpoint to batch process many documents. The output is written to Cloud Storage as JSON in the [Document] format.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{name}:batchProcess", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def documentai_projects_locations_processors_processor_versions_delete(self, request: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteRequest) -> operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteResponse:
        r"""Deletes the processor version, all artifacts under the processor version will be deleted.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def documentai_projects_locations_processors_processor_versions_deploy(self, request: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest) -> operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse:
        r"""Deploys the processor version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{name}:deploy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def documentai_projects_locations_processors_processor_versions_evaluate_processor_version(self, request: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionRequest) -> operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionResponse:
        r"""Evaluates a ProcessorVersion against annotated documents, producing an Evaluation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{processorVersion}:evaluateProcessorVersion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def documentai_projects_locations_processors_processor_versions_evaluations_get(self, request: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetRequest) -> operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse:
        r"""Retrieves a specific evaluation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDocumentaiV1beta3Evaluation])
                res.google_cloud_documentai_v1beta3_evaluation = out

        return res

    
    def documentai_projects_locations_processors_processor_versions_evaluations_list(self, request: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListRequest) -> operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse:
        r"""Retrieves a set of evaluations for a given processor version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{parent}/evaluations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDocumentaiV1beta3ListEvaluationsResponse])
                res.google_cloud_documentai_v1beta3_list_evaluations_response = out

        return res

    
    def documentai_projects_locations_processors_processor_versions_list(self, request: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsListRequest) -> operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsListResponse:
        r"""Lists all versions of a processor.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{parent}/processorVersions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse])
                res.google_cloud_documentai_v1beta3_list_processor_versions_response = out

        return res

    
    def documentai_projects_locations_processors_processor_versions_process(self, request: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest) -> operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse:
        r"""Processes a single document.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{name}:process", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDocumentaiV1beta3ProcessResponse])
                res.google_cloud_documentai_v1beta3_process_response = out

        return res

    
    def documentai_projects_locations_processors_processor_versions_train(self, request: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainRequest) -> operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainResponse:
        r"""Trains a new processor version. Operation metadata is returned as cloud_documentai_core.TrainProcessorVersionMetadata.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{parent}/processorVersions:train", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsTrainResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def documentai_projects_locations_processors_processor_versions_undeploy(self, request: operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployRequest) -> operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployResponse:
        r"""Undeploys the processor version.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{name}:undeploy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def documentai_projects_locations_processors_set_default_processor_version(self, request: operations.DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest) -> operations.DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse:
        r"""Set the default (active) version of a Processor that will be used in ProcessDocument and BatchProcessDocuments.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta3/{processor}:setDefaultProcessorVersion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    