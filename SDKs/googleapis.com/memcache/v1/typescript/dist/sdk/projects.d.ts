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
     * memcacheProjectsLocationsInstancesApplyParameters - `ApplyParameters` restarts the set of specified nodes in order to update them to the current set of parameters for the Memcached Instance.
    **/
    memcacheProjectsLocationsInstancesApplyParameters(req: operations.MemcacheProjectsLocationsInstancesApplyParametersRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesApplyParametersResponse>;
    /**
     * memcacheProjectsLocationsInstancesCreate - Creates a new Instance in a given location.
    **/
    memcacheProjectsLocationsInstancesCreate(req: operations.MemcacheProjectsLocationsInstancesCreateRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesCreateResponse>;
    /**
     * memcacheProjectsLocationsInstancesList - Lists Instances in a given location.
    **/
    memcacheProjectsLocationsInstancesList(req: operations.MemcacheProjectsLocationsInstancesListRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesListResponse>;
    /**
     * memcacheProjectsLocationsInstancesPatch - Updates an existing Instance in a given project and location.
    **/
    memcacheProjectsLocationsInstancesPatch(req: operations.MemcacheProjectsLocationsInstancesPatchRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesPatchResponse>;
    /**
     * memcacheProjectsLocationsInstancesRescheduleMaintenance - Reschedules upcoming maintenance event.
    **/
    memcacheProjectsLocationsInstancesRescheduleMaintenance(req: operations.MemcacheProjectsLocationsInstancesRescheduleMaintenanceRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesRescheduleMaintenanceResponse>;
    /**
     * memcacheProjectsLocationsInstancesUpdateParameters - Updates the defined Memcached parameters for an existing instance. This method only stages the parameters, it must be followed by `ApplyParameters` to apply the parameters to nodes of the Memcached instance.
    **/
    memcacheProjectsLocationsInstancesUpdateParameters(req: operations.MemcacheProjectsLocationsInstancesUpdateParametersRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsInstancesUpdateParametersResponse>;
    /**
     * memcacheProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    memcacheProjectsLocationsList(req: operations.MemcacheProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsListResponse>;
    /**
     * memcacheProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    memcacheProjectsLocationsOperationsCancel(req: operations.MemcacheProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsOperationsCancelResponse>;
    /**
     * memcacheProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    memcacheProjectsLocationsOperationsDelete(req: operations.MemcacheProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsOperationsDeleteResponse>;
    /**
     * memcacheProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    memcacheProjectsLocationsOperationsGet(req: operations.MemcacheProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsOperationsGetResponse>;
    /**
     * memcacheProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    memcacheProjectsLocationsOperationsList(req: operations.MemcacheProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.MemcacheProjectsLocationsOperationsListResponse>;
}
