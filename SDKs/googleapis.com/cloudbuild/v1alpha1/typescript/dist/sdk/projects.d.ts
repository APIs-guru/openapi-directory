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
     * cloudbuildProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    cloudbuildProjectsLocationsOperationsCancel(req: operations.CloudbuildProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsLocationsOperationsCancelResponse>;
    /**
     * cloudbuildProjectsWorkerPoolsCreate - Creates a `WorkerPool` to run the builds, and returns the new worker pool.
    **/
    cloudbuildProjectsWorkerPoolsCreate(req: operations.CloudbuildProjectsWorkerPoolsCreateRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsCreateResponse>;
    /**
     * cloudbuildProjectsWorkerPoolsDelete - Deletes a `WorkerPool` by its project ID and WorkerPool name.
    **/
    cloudbuildProjectsWorkerPoolsDelete(req: operations.CloudbuildProjectsWorkerPoolsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsDeleteResponse>;
    /**
     * cloudbuildProjectsWorkerPoolsGet - Returns information about a `WorkerPool`.
    **/
    cloudbuildProjectsWorkerPoolsGet(req: operations.CloudbuildProjectsWorkerPoolsGetRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsGetResponse>;
    /**
     * cloudbuildProjectsWorkerPoolsList - List project's `WorkerPool`s.
    **/
    cloudbuildProjectsWorkerPoolsList(req: operations.CloudbuildProjectsWorkerPoolsListRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsListResponse>;
    /**
     * cloudbuildProjectsWorkerPoolsPatch - Update a `WorkerPool`.
    **/
    cloudbuildProjectsWorkerPoolsPatch(req: operations.CloudbuildProjectsWorkerPoolsPatchRequest, config?: AxiosRequestConfig): Promise<operations.CloudbuildProjectsWorkerPoolsPatchResponse>;
}
