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
     * remotebuildexecutionProjectsInstancesCreate - Creates a new instance in the specified region. Returns a long running operation which contains an instance on completion. While the long running operation is in progress, any call to `GetInstance` returns an instance in state `CREATING`.
    **/
    remotebuildexecutionProjectsInstancesCreate(req: operations.RemotebuildexecutionProjectsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesCreateResponse>;
    /**
     * remotebuildexecutionProjectsInstancesList - Lists instances in a project.
    **/
    remotebuildexecutionProjectsInstancesList(req: operations.RemotebuildexecutionProjectsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesListResponse>;
    /**
     * remotebuildexecutionProjectsInstancesTestNotify - Sends a test notification to the specified instance. Returns a `google.protobuf.Empty` on success.
    **/
    remotebuildexecutionProjectsInstancesTestNotify(req: operations.RemotebuildexecutionProjectsInstancesTestNotifyRequest, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesTestNotifyResponse>;
    /**
     * remotebuildexecutionProjectsInstancesWorkerpoolsCreate - Creates a new worker pool with a specified size and configuration. Returns a long running operation which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `CREATING`.
    **/
    remotebuildexecutionProjectsInstancesWorkerpoolsCreate(req: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateRequest, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesWorkerpoolsCreateResponse>;
    /**
     * remotebuildexecutionProjectsInstancesWorkerpoolsDelete - Deletes the specified worker pool. Returns a long running operation, which contains a `google.protobuf.Empty` response on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `DELETING`.
    **/
    remotebuildexecutionProjectsInstancesWorkerpoolsDelete(req: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesWorkerpoolsDeleteResponse>;
    /**
     * remotebuildexecutionProjectsInstancesWorkerpoolsList - Lists worker pools in an instance.
    **/
    remotebuildexecutionProjectsInstancesWorkerpoolsList(req: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListRequest, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesWorkerpoolsListResponse>;
    /**
     * remotebuildexecutionProjectsInstancesWorkerpoolsPatch - Updates an existing worker pool with a specified size and/or configuration. Returns a long running operation, which contains a worker pool on completion. While the long running operation is in progress, any call to `GetWorkerPool` returns a worker pool in state `UPDATING`.
    **/
    remotebuildexecutionProjectsInstancesWorkerpoolsPatch(req: operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchRequest, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsInstancesWorkerpoolsPatchResponse>;
    /**
     * remotebuildexecutionProjectsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    remotebuildexecutionProjectsOperationsGet(req: operations.RemotebuildexecutionProjectsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.RemotebuildexecutionProjectsOperationsGetResponse>;
}
