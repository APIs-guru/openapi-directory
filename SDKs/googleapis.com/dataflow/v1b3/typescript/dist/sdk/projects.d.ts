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
     * dataflowProjectsDeleteSnapshots - Deletes a snapshot.
    **/
    dataflowProjectsDeleteSnapshots(req: operations.DataflowProjectsDeleteSnapshotsRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsDeleteSnapshotsResponse>;
    /**
     * dataflowProjectsJobsAggregated - List the jobs of a project across all regions.
    **/
    dataflowProjectsJobsAggregated(req: operations.DataflowProjectsJobsAggregatedRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsAggregatedResponse>;
    /**
     * dataflowProjectsJobsCreate - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
    **/
    dataflowProjectsJobsCreate(req: operations.DataflowProjectsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsCreateResponse>;
    /**
     * dataflowProjectsJobsDebugGetConfig - Get encoded debug configuration for component. Not cacheable.
    **/
    dataflowProjectsJobsDebugGetConfig(req: operations.DataflowProjectsJobsDebugGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsDebugGetConfigResponse>;
    /**
     * dataflowProjectsJobsDebugSendCapture - Send encoded debug capture data for component.
    **/
    dataflowProjectsJobsDebugSendCapture(req: operations.DataflowProjectsJobsDebugSendCaptureRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsDebugSendCaptureResponse>;
    /**
     * dataflowProjectsJobsGet - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
    **/
    dataflowProjectsJobsGet(req: operations.DataflowProjectsJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsGetResponse>;
    /**
     * dataflowProjectsJobsGetMetrics - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
    **/
    dataflowProjectsJobsGetMetrics(req: operations.DataflowProjectsJobsGetMetricsRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsGetMetricsResponse>;
    /**
     * dataflowProjectsJobsList - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
    **/
    dataflowProjectsJobsList(req: operations.DataflowProjectsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsListResponse>;
    /**
     * dataflowProjectsJobsMessagesList - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
    **/
    dataflowProjectsJobsMessagesList(req: operations.DataflowProjectsJobsMessagesListRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsMessagesListResponse>;
    /**
     * dataflowProjectsJobsSnapshot - Snapshot the state of a streaming job.
    **/
    dataflowProjectsJobsSnapshot(req: operations.DataflowProjectsJobsSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsSnapshotResponse>;
    /**
     * dataflowProjectsJobsUpdate - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
    **/
    dataflowProjectsJobsUpdate(req: operations.DataflowProjectsJobsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsUpdateResponse>;
    /**
     * dataflowProjectsJobsWorkItemsLease - Leases a dataflow WorkItem to run.
    **/
    dataflowProjectsJobsWorkItemsLease(req: operations.DataflowProjectsJobsWorkItemsLeaseRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsWorkItemsLeaseResponse>;
    /**
     * dataflowProjectsJobsWorkItemsReportStatus - Reports the status of dataflow WorkItems leased by a worker.
    **/
    dataflowProjectsJobsWorkItemsReportStatus(req: operations.DataflowProjectsJobsWorkItemsReportStatusRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsJobsWorkItemsReportStatusResponse>;
    /**
     * dataflowProjectsLocationsFlexTemplatesLaunch - Launch a job with a FlexTemplate.
    **/
    dataflowProjectsLocationsFlexTemplatesLaunch(req: operations.DataflowProjectsLocationsFlexTemplatesLaunchRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsFlexTemplatesLaunchResponse>;
    /**
     * dataflowProjectsLocationsJobsCreate - Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
    **/
    dataflowProjectsLocationsJobsCreate(req: operations.DataflowProjectsLocationsJobsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsCreateResponse>;
    /**
     * dataflowProjectsLocationsJobsDebugGetConfig - Get encoded debug configuration for component. Not cacheable.
    **/
    dataflowProjectsLocationsJobsDebugGetConfig(req: operations.DataflowProjectsLocationsJobsDebugGetConfigRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsDebugGetConfigResponse>;
    /**
     * dataflowProjectsLocationsJobsDebugSendCapture - Send encoded debug capture data for component.
    **/
    dataflowProjectsLocationsJobsDebugSendCapture(req: operations.DataflowProjectsLocationsJobsDebugSendCaptureRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsDebugSendCaptureResponse>;
    /**
     * dataflowProjectsLocationsJobsGet - Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
    **/
    dataflowProjectsLocationsJobsGet(req: operations.DataflowProjectsLocationsJobsGetRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsGetResponse>;
    /**
     * dataflowProjectsLocationsJobsGetExecutionDetails - Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
    **/
    dataflowProjectsLocationsJobsGetExecutionDetails(req: operations.DataflowProjectsLocationsJobsGetExecutionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsGetExecutionDetailsResponse>;
    /**
     * dataflowProjectsLocationsJobsGetMetrics - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
    **/
    dataflowProjectsLocationsJobsGetMetrics(req: operations.DataflowProjectsLocationsJobsGetMetricsRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsGetMetricsResponse>;
    /**
     * dataflowProjectsLocationsJobsList - List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, as you can only get the list of jobs that are running in `us-central1`.
    **/
    dataflowProjectsLocationsJobsList(req: operations.DataflowProjectsLocationsJobsListRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsListResponse>;
    /**
     * dataflowProjectsLocationsJobsMessagesList - Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
    **/
    dataflowProjectsLocationsJobsMessagesList(req: operations.DataflowProjectsLocationsJobsMessagesListRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsMessagesListResponse>;
    /**
     * dataflowProjectsLocationsJobsSnapshot - Snapshot the state of a streaming job.
    **/
    dataflowProjectsLocationsJobsSnapshot(req: operations.DataflowProjectsLocationsJobsSnapshotRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsSnapshotResponse>;
    /**
     * dataflowProjectsLocationsJobsSnapshotsList - Lists snapshots.
    **/
    dataflowProjectsLocationsJobsSnapshotsList(req: operations.DataflowProjectsLocationsJobsSnapshotsListRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsSnapshotsListResponse>;
    /**
     * dataflowProjectsLocationsJobsStagesGetExecutionDetails - Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
    **/
    dataflowProjectsLocationsJobsStagesGetExecutionDetails(req: operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsStagesGetExecutionDetailsResponse>;
    /**
     * dataflowProjectsLocationsJobsUpdate - Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
    **/
    dataflowProjectsLocationsJobsUpdate(req: operations.DataflowProjectsLocationsJobsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsUpdateResponse>;
    /**
     * dataflowProjectsLocationsJobsWorkItemsLease - Leases a dataflow WorkItem to run.
    **/
    dataflowProjectsLocationsJobsWorkItemsLease(req: operations.DataflowProjectsLocationsJobsWorkItemsLeaseRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsWorkItemsLeaseResponse>;
    /**
     * dataflowProjectsLocationsJobsWorkItemsReportStatus - Reports the status of dataflow WorkItems leased by a worker.
    **/
    dataflowProjectsLocationsJobsWorkItemsReportStatus(req: operations.DataflowProjectsLocationsJobsWorkItemsReportStatusRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsJobsWorkItemsReportStatusResponse>;
    /**
     * dataflowProjectsLocationsSnapshotsDelete - Deletes a snapshot.
    **/
    dataflowProjectsLocationsSnapshotsDelete(req: operations.DataflowProjectsLocationsSnapshotsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsSnapshotsDeleteResponse>;
    /**
     * dataflowProjectsLocationsSnapshotsGet - Gets information about a snapshot.
    **/
    dataflowProjectsLocationsSnapshotsGet(req: operations.DataflowProjectsLocationsSnapshotsGetRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsSnapshotsGetResponse>;
    /**
     * dataflowProjectsLocationsSnapshotsList - Lists snapshots.
    **/
    dataflowProjectsLocationsSnapshotsList(req: operations.DataflowProjectsLocationsSnapshotsListRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsSnapshotsListResponse>;
    /**
     * dataflowProjectsLocationsSqlValidate - Validates a GoogleSQL query for Cloud Dataflow syntax. Will always confirm the given query parses correctly, and if able to look up schema information from DataCatalog, will validate that the query analyzes properly as well.
    **/
    dataflowProjectsLocationsSqlValidate(req: operations.DataflowProjectsLocationsSqlValidateRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsSqlValidateResponse>;
    /**
     * dataflowProjectsLocationsTemplatesCreate - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
    **/
    dataflowProjectsLocationsTemplatesCreate(req: operations.DataflowProjectsLocationsTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsTemplatesCreateResponse>;
    /**
     * dataflowProjectsLocationsTemplatesGet - Get the template associated with a template.
    **/
    dataflowProjectsLocationsTemplatesGet(req: operations.DataflowProjectsLocationsTemplatesGetRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsTemplatesGetResponse>;
    /**
     * dataflowProjectsLocationsTemplatesLaunch - Launch a template.
    **/
    dataflowProjectsLocationsTemplatesLaunch(req: operations.DataflowProjectsLocationsTemplatesLaunchRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsTemplatesLaunchResponse>;
    /**
     * dataflowProjectsLocationsWorkerMessages - Send a worker_message to the service.
    **/
    dataflowProjectsLocationsWorkerMessages(req: operations.DataflowProjectsLocationsWorkerMessagesRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsLocationsWorkerMessagesResponse>;
    /**
     * dataflowProjectsSnapshotsGet - Gets information about a snapshot.
    **/
    dataflowProjectsSnapshotsGet(req: operations.DataflowProjectsSnapshotsGetRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsSnapshotsGetResponse>;
    /**
     * dataflowProjectsSnapshotsList - Lists snapshots.
    **/
    dataflowProjectsSnapshotsList(req: operations.DataflowProjectsSnapshotsListRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsSnapshotsListResponse>;
    /**
     * dataflowProjectsTemplatesCreate - Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API.
    **/
    dataflowProjectsTemplatesCreate(req: operations.DataflowProjectsTemplatesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsTemplatesCreateResponse>;
    /**
     * dataflowProjectsTemplatesGet - Get the template associated with a template.
    **/
    dataflowProjectsTemplatesGet(req: operations.DataflowProjectsTemplatesGetRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsTemplatesGetResponse>;
    /**
     * dataflowProjectsTemplatesLaunch - Launch a template.
    **/
    dataflowProjectsTemplatesLaunch(req: operations.DataflowProjectsTemplatesLaunchRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsTemplatesLaunchResponse>;
    /**
     * dataflowProjectsWorkerMessages - Send a worker_message to the service.
    **/
    dataflowProjectsWorkerMessages(req: operations.DataflowProjectsWorkerMessagesRequest, config?: AxiosRequestConfig): Promise<operations.DataflowProjectsWorkerMessagesResponse>;
}
