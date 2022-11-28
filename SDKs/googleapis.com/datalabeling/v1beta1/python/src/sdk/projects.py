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

    
    def datalabeling_projects_annotation_spec_sets_create(self, request: operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest) -> operations.DatalabelingProjectsAnnotationSpecSetsCreateResponse:
        r"""Creates an annotation spec set by providing a set of labels.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/annotationSpecSets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsAnnotationSpecSetsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1AnnotationSpecSet])
                res.google_cloud_datalabeling_v1beta1_annotation_spec_set = out

        return res

    
    def datalabeling_projects_annotation_spec_sets_list(self, request: operations.DatalabelingProjectsAnnotationSpecSetsListRequest) -> operations.DatalabelingProjectsAnnotationSpecSetsListResponse:
        r"""Lists annotation spec sets for a project. Pagination is supported.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/annotationSpecSets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsAnnotationSpecSetsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1ListAnnotationSpecSetsResponse])
                res.google_cloud_datalabeling_v1beta1_list_annotation_spec_sets_response = out

        return res

    
    def datalabeling_projects_datasets_annotated_datasets_examples_list(self, request: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest) -> operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse:
        r"""Lists examples in an annotated dataset. Pagination is supported.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/examples", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1ListExamplesResponse])
                res.google_cloud_datalabeling_v1beta1_list_examples_response = out

        return res

    
    def datalabeling_projects_datasets_annotated_datasets_feedback_threads_feedback_messages_create(self, request: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateRequest) -> operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateResponse:
        r"""Create a FeedbackMessage object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/feedbackMessages", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def datalabeling_projects_datasets_annotated_datasets_feedback_threads_feedback_messages_list(self, request: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest) -> operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse:
        r"""List FeedbackMessages with pagination.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/feedbackMessages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1ListFeedbackMessagesResponse])
                res.google_cloud_datalabeling_v1beta1_list_feedback_messages_response = out

        return res

    
    def datalabeling_projects_datasets_annotated_datasets_feedback_threads_list(self, request: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListRequest) -> operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse:
        r"""List FeedbackThreads with pagination.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/feedbackThreads", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1ListFeedbackThreadsResponse])
                res.google_cloud_datalabeling_v1beta1_list_feedback_threads_response = out

        return res

    
    def datalabeling_projects_datasets_annotated_datasets_list(self, request: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest) -> operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse:
        r"""Lists annotated datasets for a dataset. Pagination is supported.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/annotatedDatasets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1ListAnnotatedDatasetsResponse])
                res.google_cloud_datalabeling_v1beta1_list_annotated_datasets_response = out

        return res

    
    def datalabeling_projects_datasets_create(self, request: operations.DatalabelingProjectsDatasetsCreateRequest) -> operations.DatalabelingProjectsDatasetsCreateResponse:
        r"""Creates dataset. If success return a Dataset resource.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/datasets", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1Dataset])
                res.google_cloud_datalabeling_v1beta1_dataset = out

        return res

    
    def datalabeling_projects_datasets_data_items_list(self, request: operations.DatalabelingProjectsDatasetsDataItemsListRequest) -> operations.DatalabelingProjectsDatasetsDataItemsListResponse:
        r"""Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/dataItems", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsDataItemsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1ListDataItemsResponse])
                res.google_cloud_datalabeling_v1beta1_list_data_items_response = out

        return res

    
    def datalabeling_projects_datasets_evaluations_example_comparisons_search(self, request: operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest) -> operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse:
        r"""Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/exampleComparisons:search", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1SearchExampleComparisonsResponse])
                res.google_cloud_datalabeling_v1beta1_search_example_comparisons_response = out

        return res

    
    def datalabeling_projects_datasets_export_data(self, request: operations.DatalabelingProjectsDatasetsExportDataRequest) -> operations.DatalabelingProjectsDatasetsExportDataResponse:
        r"""Exports data and annotations from dataset.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:exportData", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsExportDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def datalabeling_projects_datasets_image_label(self, request: operations.DatalabelingProjectsDatasetsImageLabelRequest) -> operations.DatalabelingProjectsDatasetsImageLabelResponse:
        r"""Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/image:label", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsImageLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def datalabeling_projects_datasets_import_data(self, request: operations.DatalabelingProjectsDatasetsImportDataRequest) -> operations.DatalabelingProjectsDatasetsImportDataResponse:
        r"""Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:importData", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsImportDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def datalabeling_projects_datasets_list(self, request: operations.DatalabelingProjectsDatasetsListRequest) -> operations.DatalabelingProjectsDatasetsListResponse:
        r"""Lists datasets under a project. Pagination is supported.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/datasets", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1ListDatasetsResponse])
                res.google_cloud_datalabeling_v1beta1_list_datasets_response = out

        return res

    
    def datalabeling_projects_datasets_text_label(self, request: operations.DatalabelingProjectsDatasetsTextLabelRequest) -> operations.DatalabelingProjectsDatasetsTextLabelResponse:
        r"""Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/text:label", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsTextLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def datalabeling_projects_datasets_video_label(self, request: operations.DatalabelingProjectsDatasetsVideoLabelRequest) -> operations.DatalabelingProjectsDatasetsVideoLabelResponse:
        r"""Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/video:label", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsDatasetsVideoLabelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def datalabeling_projects_evaluation_jobs_create(self, request: operations.DatalabelingProjectsEvaluationJobsCreateRequest) -> operations.DatalabelingProjectsEvaluationJobsCreateResponse:
        r"""Creates an evaluation job.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/evaluationJobs", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsEvaluationJobsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1EvaluationJob])
                res.google_cloud_datalabeling_v1beta1_evaluation_job = out

        return res

    
    def datalabeling_projects_evaluation_jobs_list(self, request: operations.DatalabelingProjectsEvaluationJobsListRequest) -> operations.DatalabelingProjectsEvaluationJobsListResponse:
        r"""Lists all evaluation jobs within a project with possible filters. Pagination is supported.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/evaluationJobs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsEvaluationJobsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1ListEvaluationJobsResponse])
                res.google_cloud_datalabeling_v1beta1_list_evaluation_jobs_response = out

        return res

    
    def datalabeling_projects_evaluation_jobs_patch(self, request: operations.DatalabelingProjectsEvaluationJobsPatchRequest) -> operations.DatalabelingProjectsEvaluationJobsPatchResponse:
        r"""Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsEvaluationJobsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1EvaluationJob])
                res.google_cloud_datalabeling_v1beta1_evaluation_job = out

        return res

    
    def datalabeling_projects_evaluation_jobs_pause(self, request: operations.DatalabelingProjectsEvaluationJobsPauseRequest) -> operations.DatalabelingProjectsEvaluationJobsPauseResponse:
        r"""Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:pause", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsEvaluationJobsPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def datalabeling_projects_evaluation_jobs_resume(self, request: operations.DatalabelingProjectsEvaluationJobsResumeRequest) -> operations.DatalabelingProjectsEvaluationJobsResumeResponse:
        r"""Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:resume", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsEvaluationJobsResumeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def datalabeling_projects_evaluations_search(self, request: operations.DatalabelingProjectsEvaluationsSearchRequest) -> operations.DatalabelingProjectsEvaluationsSearchResponse:
        r"""Searches evaluations within a project.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/evaluations:search", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsEvaluationsSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1SearchEvaluationsResponse])
                res.google_cloud_datalabeling_v1beta1_search_evaluations_response = out

        return res

    
    def datalabeling_projects_instructions_create(self, request: operations.DatalabelingProjectsInstructionsCreateRequest) -> operations.DatalabelingProjectsInstructionsCreateResponse:
        r"""Creates an instruction for how data should be labeled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/instructions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsInstructionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def datalabeling_projects_instructions_list(self, request: operations.DatalabelingProjectsInstructionsListRequest) -> operations.DatalabelingProjectsInstructionsListResponse:
        r"""Lists instructions for a project. Pagination is supported.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{parent}/instructions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsInstructionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudDatalabelingV1beta1ListInstructionsResponse])
                res.google_cloud_datalabeling_v1beta1_list_instructions_response = out

        return res

    
    def datalabeling_projects_operations_cancel(self, request: operations.DatalabelingProjectsOperationsCancelRequest) -> operations.DatalabelingProjectsOperationsCancelResponse:
        r"""Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}:cancel", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsOperationsCancelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def datalabeling_projects_operations_delete(self, request: operations.DatalabelingProjectsOperationsDeleteRequest) -> operations.DatalabelingProjectsOperationsDeleteResponse:
        r"""Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsOperationsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def datalabeling_projects_operations_get(self, request: operations.DatalabelingProjectsOperationsGetRequest) -> operations.DatalabelingProjectsOperationsGetResponse:
        r"""Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsOperationsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningOperation])
                res.google_longrunning_operation = out

        return res

    
    def datalabeling_projects_operations_list(self, request: operations.DatalabelingProjectsOperationsListRequest) -> operations.DatalabelingProjectsOperationsListResponse:
        r"""Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/*/operations`. To override the binding, API services can add a binding such as `\"/v1/{name=users/*}/operations\"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta1/{name}/operations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DatalabelingProjectsOperationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleLongrunningListOperationsResponse])
                res.google_longrunning_list_operations_response = out

        return res

    