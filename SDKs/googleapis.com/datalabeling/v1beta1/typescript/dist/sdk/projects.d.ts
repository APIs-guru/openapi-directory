import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Projects {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * datalabelingProjectsAnnotationSpecSetsCreate - Creates an annotation spec set by providing a set of labels.
    **/
    datalabelingProjectsAnnotationSpecSetsCreate(req: operations.DatalabelingProjectsAnnotationSpecSetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsAnnotationSpecSetsCreateResponse>;
    /**
     * datalabelingProjectsAnnotationSpecSetsList - Lists annotation spec sets for a project. Pagination is supported.
    **/
    datalabelingProjectsAnnotationSpecSetsList(req: operations.DatalabelingProjectsAnnotationSpecSetsListRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsAnnotationSpecSetsListResponse>;
    /**
     * datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList - Lists examples in an annotated dataset. Pagination is supported.
    **/
    datalabelingProjectsDatasetsAnnotatedDatasetsExamplesList(req: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsAnnotatedDatasetsExamplesListResponse>;
    /**
     * datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate - Create a FeedbackMessage object.
    **/
    datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreate(req: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesCreateResponse>;
    /**
     * datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList - List FeedbackMessages with pagination.
    **/
    datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesList(req: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsFeedbackMessagesListResponse>;
    /**
     * datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList - List FeedbackThreads with pagination.
    **/
    datalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsList(req: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsAnnotatedDatasetsFeedbackThreadsListResponse>;
    /**
     * datalabelingProjectsDatasetsAnnotatedDatasetsList - Lists annotated datasets for a dataset. Pagination is supported.
    **/
    datalabelingProjectsDatasetsAnnotatedDatasetsList(req: operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsAnnotatedDatasetsListResponse>;
    /**
     * datalabelingProjectsDatasetsCreate - Creates dataset. If success return a Dataset resource.
    **/
    datalabelingProjectsDatasetsCreate(req: operations.DatalabelingProjectsDatasetsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsCreateResponse>;
    /**
     * datalabelingProjectsDatasetsDataItemsList - Lists data items in a dataset. This API can be called after data are imported into dataset. Pagination is supported.
    **/
    datalabelingProjectsDatasetsDataItemsList(req: operations.DatalabelingProjectsDatasetsDataItemsListRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsDataItemsListResponse>;
    /**
     * datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch - Searches example comparisons from an evaluation. The return format is a list of example comparisons that show ground truth and prediction(s) for a single input. Search by providing an evaluation ID.
    **/
    datalabelingProjectsDatasetsEvaluationsExampleComparisonsSearch(req: operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsEvaluationsExampleComparisonsSearchResponse>;
    /**
     * datalabelingProjectsDatasetsExportData - Exports data and annotations from dataset.
    **/
    datalabelingProjectsDatasetsExportData(req: operations.DatalabelingProjectsDatasetsExportDataRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsExportDataResponse>;
    /**
     * datalabelingProjectsDatasetsImageLabel - Starts a labeling task for image. The type of image labeling task is configured by feature in the request.
    **/
    datalabelingProjectsDatasetsImageLabel(req: operations.DatalabelingProjectsDatasetsImageLabelRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsImageLabelResponse>;
    /**
     * datalabelingProjectsDatasetsImportData - Imports data into dataset based on source locations defined in request. It can be called multiple times for the same dataset. Each dataset can only have one long running operation running on it. For example, no labeling task (also long running operation) can be started while importing is still ongoing. Vice versa.
    **/
    datalabelingProjectsDatasetsImportData(req: operations.DatalabelingProjectsDatasetsImportDataRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsImportDataResponse>;
    /**
     * datalabelingProjectsDatasetsList - Lists datasets under a project. Pagination is supported.
    **/
    datalabelingProjectsDatasetsList(req: operations.DatalabelingProjectsDatasetsListRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsListResponse>;
    /**
     * datalabelingProjectsDatasetsTextLabel - Starts a labeling task for text. The type of text labeling task is configured by feature in the request.
    **/
    datalabelingProjectsDatasetsTextLabel(req: operations.DatalabelingProjectsDatasetsTextLabelRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsTextLabelResponse>;
    /**
     * datalabelingProjectsDatasetsVideoLabel - Starts a labeling task for video. The type of video labeling task is configured by feature in the request.
    **/
    datalabelingProjectsDatasetsVideoLabel(req: operations.DatalabelingProjectsDatasetsVideoLabelRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsDatasetsVideoLabelResponse>;
    /**
     * datalabelingProjectsEvaluationJobsCreate - Creates an evaluation job.
    **/
    datalabelingProjectsEvaluationJobsCreate(req: operations.DatalabelingProjectsEvaluationJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationJobsCreateResponse>;
    /**
     * datalabelingProjectsEvaluationJobsList - Lists all evaluation jobs within a project with possible filters. Pagination is supported.
    **/
    datalabelingProjectsEvaluationJobsList(req: operations.DatalabelingProjectsEvaluationJobsListRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationJobsListResponse>;
    /**
     * datalabelingProjectsEvaluationJobsPatch - Updates an evaluation job. You can only update certain fields of the job's EvaluationJobConfig: `humanAnnotationConfig.instruction`, `exampleCount`, and `exampleSamplePercentage`. If you want to change any other aspect of the evaluation job, you must delete the job and create a new one.
    **/
    datalabelingProjectsEvaluationJobsPatch(req: operations.DatalabelingProjectsEvaluationJobsPatchRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationJobsPatchResponse>;
    /**
     * datalabelingProjectsEvaluationJobsPause - Pauses an evaluation job. Pausing an evaluation job that is already in a `PAUSED` state is a no-op.
    **/
    datalabelingProjectsEvaluationJobsPause(req: operations.DatalabelingProjectsEvaluationJobsPauseRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationJobsPauseResponse>;
    /**
     * datalabelingProjectsEvaluationJobsResume - Resumes a paused evaluation job. A deleted evaluation job can't be resumed. Resuming a running or scheduled evaluation job is a no-op.
    **/
    datalabelingProjectsEvaluationJobsResume(req: operations.DatalabelingProjectsEvaluationJobsResumeRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationJobsResumeResponse>;
    /**
     * datalabelingProjectsEvaluationsSearch - Searches evaluations within a project.
    **/
    datalabelingProjectsEvaluationsSearch(req: operations.DatalabelingProjectsEvaluationsSearchRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsEvaluationsSearchResponse>;
    /**
     * datalabelingProjectsInstructionsCreate - Creates an instruction for how data should be labeled.
    **/
    datalabelingProjectsInstructionsCreate(req: operations.DatalabelingProjectsInstructionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsInstructionsCreateResponse>;
    /**
     * datalabelingProjectsInstructionsList - Lists instructions for a project. Pagination is supported.
    **/
    datalabelingProjectsInstructionsList(req: operations.DatalabelingProjectsInstructionsListRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsInstructionsListResponse>;
    /**
     * datalabelingProjectsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    datalabelingProjectsOperationsCancel(req: operations.DatalabelingProjectsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsOperationsCancelResponse>;
    /**
     * datalabelingProjectsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    datalabelingProjectsOperationsDelete(req: operations.DatalabelingProjectsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsOperationsDeleteResponse>;
    /**
     * datalabelingProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    datalabelingProjectsOperationsGet(req: operations.DatalabelingProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsOperationsGetResponse>;
    /**
     * datalabelingProjectsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    datalabelingProjectsOperationsList(req: operations.DatalabelingProjectsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.DatalabelingProjectsOperationsListResponse>;
}
