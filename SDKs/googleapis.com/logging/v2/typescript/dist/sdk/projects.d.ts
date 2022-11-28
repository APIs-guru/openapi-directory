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
     * loggingProjectsExclusionsCreate - Creates a new exclusion in the _Default sink in a specified parent resource. Only log entries belonging to that resource can be excluded. You can have up to 10 exclusions in a resource.
    **/
    loggingProjectsExclusionsCreate(req: operations.LoggingProjectsExclusionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsExclusionsCreateResponse>;
    /**
     * loggingProjectsExclusionsList - Lists all the exclusions on the _Default sink in a parent resource.
    **/
    loggingProjectsExclusionsList(req: operations.LoggingProjectsExclusionsListRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsExclusionsListResponse>;
    /**
     * loggingProjectsLocationsBucketsCreate - Creates a log bucket that can be used to store log entries. After a bucket has been created, the bucket's location cannot be changed.
    **/
    loggingProjectsLocationsBucketsCreate(req: operations.LoggingProjectsLocationsBucketsCreateRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsBucketsCreateResponse>;
    /**
     * loggingProjectsLocationsBucketsList - Lists log buckets.
    **/
    loggingProjectsLocationsBucketsList(req: operations.LoggingProjectsLocationsBucketsListRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsBucketsListResponse>;
    /**
     * loggingProjectsLocationsBucketsUndelete - Undeletes a log bucket. A bucket that has been deleted can be undeleted within the grace period of 7 days.
    **/
    loggingProjectsLocationsBucketsUndelete(req: operations.LoggingProjectsLocationsBucketsUndeleteRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsBucketsUndeleteResponse>;
    /**
     * loggingProjectsLocationsBucketsViewsCreate - Creates a view over log entries in a log bucket. A bucket may contain a maximum of 30 views.
    **/
    loggingProjectsLocationsBucketsViewsCreate(req: operations.LoggingProjectsLocationsBucketsViewsCreateRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsBucketsViewsCreateResponse>;
    /**
     * loggingProjectsLocationsBucketsViewsDelete - Deletes a view on a log bucket. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can delete the view. If this occurs, please try again in a few minutes.
    **/
    loggingProjectsLocationsBucketsViewsDelete(req: operations.LoggingProjectsLocationsBucketsViewsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsBucketsViewsDeleteResponse>;
    /**
     * loggingProjectsLocationsBucketsViewsList - Lists views on a log bucket.
    **/
    loggingProjectsLocationsBucketsViewsList(req: operations.LoggingProjectsLocationsBucketsViewsListRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsBucketsViewsListResponse>;
    /**
     * loggingProjectsLocationsBucketsViewsPatch - Updates a view on a log bucket. This method replaces the following fields in the existing view with values from the new view: filter. If an UNAVAILABLE error is returned, this indicates that system is not in a state where it can update the view. If this occurs, please try again in a few minutes.
    **/
    loggingProjectsLocationsBucketsViewsPatch(req: operations.LoggingProjectsLocationsBucketsViewsPatchRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsBucketsViewsPatchResponse>;
    /**
     * loggingProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    loggingProjectsLocationsList(req: operations.LoggingProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsListResponse>;
    /**
     * loggingProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns google.rpc.Code.UNIMPLEMENTED. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to Code.CANCELLED.
    **/
    loggingProjectsLocationsOperationsCancel(req: operations.LoggingProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsOperationsCancelResponse>;
    /**
     * loggingProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    loggingProjectsLocationsOperationsGet(req: operations.LoggingProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsOperationsGetResponse>;
    /**
     * loggingProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns UNIMPLEMENTED.NOTE: the name binding allows API services to override the binding to use different resource name schemes, such as users/* /operations. To override the binding, API services can add a binding such as "/v1/{name=users/*}/operations" to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    loggingProjectsLocationsOperationsList(req: operations.LoggingProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLocationsOperationsListResponse>;
    /**
     * loggingProjectsLogsDelete - Deletes all the log entries in a log for the _Default Log Bucket. The log reappears if it receives new entries. Log entries written shortly before the delete operation might not be deleted. Entries received after the delete operation with a timestamp before the operation will be deleted.
    **/
    loggingProjectsLogsDelete(req: operations.LoggingProjectsLogsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLogsDeleteResponse>;
    /**
     * loggingProjectsLogsList - Lists the logs in projects, organizations, folders, or billing accounts. Only logs that have entries are listed.
    **/
    loggingProjectsLogsList(req: operations.LoggingProjectsLogsListRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsLogsListResponse>;
    /**
     * loggingProjectsMetricsCreate - Creates a logs-based metric.
    **/
    loggingProjectsMetricsCreate(req: operations.LoggingProjectsMetricsCreateRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsMetricsCreateResponse>;
    /**
     * loggingProjectsMetricsDelete - Deletes a logs-based metric.
    **/
    loggingProjectsMetricsDelete(req: operations.LoggingProjectsMetricsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsMetricsDeleteResponse>;
    /**
     * loggingProjectsMetricsGet - Gets a logs-based metric.
    **/
    loggingProjectsMetricsGet(req: operations.LoggingProjectsMetricsGetRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsMetricsGetResponse>;
    /**
     * loggingProjectsMetricsList - Lists logs-based metrics.
    **/
    loggingProjectsMetricsList(req: operations.LoggingProjectsMetricsListRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsMetricsListResponse>;
    /**
     * loggingProjectsMetricsUpdate - Creates or updates a logs-based metric.
    **/
    loggingProjectsMetricsUpdate(req: operations.LoggingProjectsMetricsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsMetricsUpdateResponse>;
    /**
     * loggingProjectsSinksPatch - Updates a sink. This method replaces the following fields in the existing sink with values from the new sink: destination, and filter.The updated sink might also have a new writer_identity; see the unique_writer_identity field.
    **/
    loggingProjectsSinksPatch(req: operations.LoggingProjectsSinksPatchRequest, config?: AxiosRequestConfig): Promise<operations.LoggingProjectsSinksPatchResponse>;
}
