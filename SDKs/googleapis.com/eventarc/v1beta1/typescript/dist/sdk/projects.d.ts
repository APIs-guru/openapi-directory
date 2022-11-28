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
     * eventarcProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    eventarcProjectsLocationsList(req: operations.EventarcProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsListResponse>;
    /**
     * eventarcProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    eventarcProjectsLocationsOperationsCancel(req: operations.EventarcProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsOperationsCancelResponse>;
    /**
     * eventarcProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    eventarcProjectsLocationsOperationsList(req: operations.EventarcProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsOperationsListResponse>;
    /**
     * eventarcProjectsLocationsTriggersCreate - Create a new trigger in a particular project and location.
    **/
    eventarcProjectsLocationsTriggersCreate(req: operations.EventarcProjectsLocationsTriggersCreateRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersCreateResponse>;
    /**
     * eventarcProjectsLocationsTriggersDelete - Delete a single trigger.
    **/
    eventarcProjectsLocationsTriggersDelete(req: operations.EventarcProjectsLocationsTriggersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersDeleteResponse>;
    /**
     * eventarcProjectsLocationsTriggersGet - Get a single trigger.
    **/
    eventarcProjectsLocationsTriggersGet(req: operations.EventarcProjectsLocationsTriggersGetRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersGetResponse>;
    /**
     * eventarcProjectsLocationsTriggersGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    eventarcProjectsLocationsTriggersGetIamPolicy(req: operations.EventarcProjectsLocationsTriggersGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersGetIamPolicyResponse>;
    /**
     * eventarcProjectsLocationsTriggersList - List triggers.
    **/
    eventarcProjectsLocationsTriggersList(req: operations.EventarcProjectsLocationsTriggersListRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersListResponse>;
    /**
     * eventarcProjectsLocationsTriggersPatch - Update a single trigger.
    **/
    eventarcProjectsLocationsTriggersPatch(req: operations.EventarcProjectsLocationsTriggersPatchRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersPatchResponse>;
    /**
     * eventarcProjectsLocationsTriggersSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    eventarcProjectsLocationsTriggersSetIamPolicy(req: operations.EventarcProjectsLocationsTriggersSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersSetIamPolicyResponse>;
    /**
     * eventarcProjectsLocationsTriggersTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    eventarcProjectsLocationsTriggersTestIamPermissions(req: operations.EventarcProjectsLocationsTriggersTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.EventarcProjectsLocationsTriggersTestIamPermissionsResponse>;
}
