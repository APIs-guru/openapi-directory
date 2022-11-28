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
     * redisProjectsLocationsInstancesCreate - Creates a Redis instance based on the specified tier and memory size. By default, the instance is accessible from the project's [default network](https://cloud.google.com/vpc/docs/vpc). The creation is executed asynchronously and callers may check the returned operation to track its progress. Once the operation is completed the Redis instance will be fully functional. The completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
    **/
    redisProjectsLocationsInstancesCreate(req: operations.RedisProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesCreateResponse>;
    /**
     * redisProjectsLocationsInstancesExport - Export Redis instance data into a Redis RDB format file in Cloud Storage. Redis will continue serving during this operation. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
    **/
    redisProjectsLocationsInstancesExport(req: operations.RedisProjectsLocationsInstancesExportRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesExportResponse>;
    /**
     * redisProjectsLocationsInstancesFailover - Initiates a failover of the primary node to current replica node for a specific STANDARD tier Cloud Memorystore for Redis instance.
    **/
    redisProjectsLocationsInstancesFailover(req: operations.RedisProjectsLocationsInstancesFailoverRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesFailoverResponse>;
    /**
     * redisProjectsLocationsInstancesGetAuthString - Gets the AUTH string for a Redis instance. If AUTH is not enabled for the instance the response will be empty. This information is not included in the details returned to GetInstance.
    **/
    redisProjectsLocationsInstancesGetAuthString(req: operations.RedisProjectsLocationsInstancesGetAuthStringRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesGetAuthStringResponse>;
    /**
     * redisProjectsLocationsInstancesImport - Import a Redis RDB snapshot file from Cloud Storage into a Redis instance. Redis may stop serving during this operation. Instance state will be IMPORTING for entire operation. When complete, the instance will contain only data from the imported file. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
    **/
    redisProjectsLocationsInstancesImport(req: operations.RedisProjectsLocationsInstancesImportRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesImportResponse>;
    /**
     * redisProjectsLocationsInstancesList - Lists all Redis instances owned by a project in either the specified location (region) or all locations. The location should have the following format: * `projects/{project_id}/locations/{location_id}` If `location_id` is specified as `-` (wildcard), then all regions available to the project are queried, and the results are aggregated.
    **/
    redisProjectsLocationsInstancesList(req: operations.RedisProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesListResponse>;
    /**
     * redisProjectsLocationsInstancesPatch - Updates the metadata and configuration of a specific Redis instance. Completed longrunning.Operation will contain the new instance object in the response field. The returned operation is automatically deleted after a few hours, so there is no need to call DeleteOperation.
    **/
    redisProjectsLocationsInstancesPatch(req: operations.RedisProjectsLocationsInstancesPatchRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesPatchResponse>;
    /**
     * redisProjectsLocationsInstancesRescheduleMaintenance - Reschedule maintenance for a given instance in a given project and location.
    **/
    redisProjectsLocationsInstancesRescheduleMaintenance(req: operations.RedisProjectsLocationsInstancesRescheduleMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesRescheduleMaintenanceResponse>;
    /**
     * redisProjectsLocationsInstancesUpgrade - Upgrades Redis instance to the newer Redis version specified in the request.
    **/
    redisProjectsLocationsInstancesUpgrade(req: operations.RedisProjectsLocationsInstancesUpgradeRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsInstancesUpgradeResponse>;
    /**
     * redisProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    redisProjectsLocationsList(req: operations.RedisProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsListResponse>;
    /**
     * redisProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    redisProjectsLocationsOperationsCancel(req: operations.RedisProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsOperationsCancelResponse>;
    /**
     * redisProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    redisProjectsLocationsOperationsDelete(req: operations.RedisProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsOperationsDeleteResponse>;
    /**
     * redisProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    redisProjectsLocationsOperationsGet(req: operations.RedisProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsOperationsGetResponse>;
    /**
     * redisProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    redisProjectsLocationsOperationsList(req: operations.RedisProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.RedisProjectsLocationsOperationsListResponse>;
}
