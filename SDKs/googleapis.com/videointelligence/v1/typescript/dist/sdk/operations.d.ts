import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Operations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * videointelligenceOperationsProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    videointelligenceOperationsProjectsLocationsOperationsCancel(req: operations.VideointelligenceOperationsProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceOperationsProjectsLocationsOperationsCancelResponse>;
    /**
     * videointelligenceOperationsProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    videointelligenceOperationsProjectsLocationsOperationsDelete(req: operations.VideointelligenceOperationsProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceOperationsProjectsLocationsOperationsDeleteResponse>;
    /**
     * videointelligenceOperationsProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    videointelligenceOperationsProjectsLocationsOperationsGet(req: operations.VideointelligenceOperationsProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.VideointelligenceOperationsProjectsLocationsOperationsGetResponse>;
}
