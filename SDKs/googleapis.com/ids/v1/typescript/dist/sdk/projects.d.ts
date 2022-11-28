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
     * idsProjectsLocationsEndpointsCreate - Creates a new Endpoint in a given project and location.
    **/
    idsProjectsLocationsEndpointsCreate(req: operations.IdsProjectsLocationsEndpointsCreateRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsEndpointsCreateResponse>;
    /**
     * idsProjectsLocationsEndpointsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    idsProjectsLocationsEndpointsGetIamPolicy(req: operations.IdsProjectsLocationsEndpointsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsEndpointsGetIamPolicyResponse>;
    /**
     * idsProjectsLocationsEndpointsList - Lists Endpoints in a given project and location.
    **/
    idsProjectsLocationsEndpointsList(req: operations.IdsProjectsLocationsEndpointsListRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsEndpointsListResponse>;
    /**
     * idsProjectsLocationsEndpointsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    idsProjectsLocationsEndpointsSetIamPolicy(req: operations.IdsProjectsLocationsEndpointsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsEndpointsSetIamPolicyResponse>;
    /**
     * idsProjectsLocationsEndpointsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    idsProjectsLocationsEndpointsTestIamPermissions(req: operations.IdsProjectsLocationsEndpointsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsEndpointsTestIamPermissionsResponse>;
    /**
     * idsProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    idsProjectsLocationsList(req: operations.IdsProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsListResponse>;
    /**
     * idsProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    idsProjectsLocationsOperationsCancel(req: operations.IdsProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsOperationsCancelResponse>;
    /**
     * idsProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    idsProjectsLocationsOperationsDelete(req: operations.IdsProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsOperationsDeleteResponse>;
    /**
     * idsProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    idsProjectsLocationsOperationsGet(req: operations.IdsProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsOperationsGetResponse>;
    /**
     * idsProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    idsProjectsLocationsOperationsList(req: operations.IdsProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.IdsProjectsLocationsOperationsListResponse>;
}
