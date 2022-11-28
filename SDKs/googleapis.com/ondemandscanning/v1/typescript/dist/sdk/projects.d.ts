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
     * ondemandscanningProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    ondemandscanningProjectsLocationsOperationsCancel(req: operations.OndemandscanningProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.OndemandscanningProjectsLocationsOperationsCancelResponse>;
    /**
     * ondemandscanningProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    ondemandscanningProjectsLocationsOperationsDelete(req: operations.OndemandscanningProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.OndemandscanningProjectsLocationsOperationsDeleteResponse>;
    /**
     * ondemandscanningProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    ondemandscanningProjectsLocationsOperationsGet(req: operations.OndemandscanningProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.OndemandscanningProjectsLocationsOperationsGetResponse>;
    /**
     * ondemandscanningProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    ondemandscanningProjectsLocationsOperationsList(req: operations.OndemandscanningProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.OndemandscanningProjectsLocationsOperationsListResponse>;
    /**
     * ondemandscanningProjectsLocationsOperationsWait - Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
    **/
    ondemandscanningProjectsLocationsOperationsWait(req: operations.OndemandscanningProjectsLocationsOperationsWaitRequest, config?: AxiosRequestConfig): Promise<operations.OndemandscanningProjectsLocationsOperationsWaitResponse>;
    /**
     * ondemandscanningProjectsLocationsScansAnalyzePackages - Initiates an analysis of the provided packages.
    **/
    ondemandscanningProjectsLocationsScansAnalyzePackages(req: operations.OndemandscanningProjectsLocationsScansAnalyzePackagesRequest, config?: AxiosRequestConfig): Promise<operations.OndemandscanningProjectsLocationsScansAnalyzePackagesResponse>;
    /**
     * ondemandscanningProjectsLocationsScansVulnerabilitiesList - Lists vulnerabilities resulting from a successfully completed scan.
    **/
    ondemandscanningProjectsLocationsScansVulnerabilitiesList(req: operations.OndemandscanningProjectsLocationsScansVulnerabilitiesListRequest, config?: AxiosRequestConfig): Promise<operations.OndemandscanningProjectsLocationsScansVulnerabilitiesListResponse>;
}
