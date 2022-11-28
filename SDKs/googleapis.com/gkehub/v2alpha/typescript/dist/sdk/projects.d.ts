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
     * gkehubProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    gkehubProjectsLocationsList(req: operations.GkehubProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsListResponse>;
    /**
     * gkehubProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    gkehubProjectsLocationsOperationsCancel(req: operations.GkehubProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsCancelResponse>;
    /**
     * gkehubProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    gkehubProjectsLocationsOperationsGet(req: operations.GkehubProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsGetResponse>;
    /**
     * gkehubProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    gkehubProjectsLocationsOperationsList(req: operations.GkehubProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsListResponse>;
}
