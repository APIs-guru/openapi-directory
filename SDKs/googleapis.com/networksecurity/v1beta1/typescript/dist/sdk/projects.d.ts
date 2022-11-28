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
     * networksecurityProjectsLocationsAuthorizationPoliciesCreate - Creates a new AuthorizationPolicy in a given project and location.
    **/
    networksecurityProjectsLocationsAuthorizationPoliciesCreate(req: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAuthorizationPoliciesCreateResponse>;
    /**
     * networksecurityProjectsLocationsAuthorizationPoliciesList - Lists AuthorizationPolicies in a given project and location.
    **/
    networksecurityProjectsLocationsAuthorizationPoliciesList(req: operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsAuthorizationPoliciesListResponse>;
    /**
     * networksecurityProjectsLocationsClientTlsPoliciesCreate - Creates a new ClientTlsPolicy in a given project and location.
    **/
    networksecurityProjectsLocationsClientTlsPoliciesCreate(req: operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsClientTlsPoliciesCreateResponse>;
    /**
     * networksecurityProjectsLocationsClientTlsPoliciesList - Lists ClientTlsPolicies in a given project and location.
    **/
    networksecurityProjectsLocationsClientTlsPoliciesList(req: operations.NetworksecurityProjectsLocationsClientTlsPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsClientTlsPoliciesListResponse>;
    /**
     * networksecurityProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    networksecurityProjectsLocationsList(req: operations.NetworksecurityProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsListResponse>;
    /**
     * networksecurityProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    networksecurityProjectsLocationsOperationsCancel(req: operations.NetworksecurityProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsOperationsCancelResponse>;
    /**
     * networksecurityProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    networksecurityProjectsLocationsOperationsList(req: operations.NetworksecurityProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsOperationsListResponse>;
    /**
     * networksecurityProjectsLocationsServerTlsPoliciesCreate - Creates a new ServerTlsPolicy in a given project and location.
    **/
    networksecurityProjectsLocationsServerTlsPoliciesCreate(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesCreateResponse>;
    /**
     * networksecurityProjectsLocationsServerTlsPoliciesDelete - Deletes a single ServerTlsPolicy.
    **/
    networksecurityProjectsLocationsServerTlsPoliciesDelete(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesDeleteResponse>;
    /**
     * networksecurityProjectsLocationsServerTlsPoliciesGet - Gets details of a single ServerTlsPolicy.
    **/
    networksecurityProjectsLocationsServerTlsPoliciesGet(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetResponse>;
    /**
     * networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    networksecurityProjectsLocationsServerTlsPoliciesGetIamPolicy(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesGetIamPolicyResponse>;
    /**
     * networksecurityProjectsLocationsServerTlsPoliciesList - Lists ServerTlsPolicies in a given project and location.
    **/
    networksecurityProjectsLocationsServerTlsPoliciesList(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesListResponse>;
    /**
     * networksecurityProjectsLocationsServerTlsPoliciesPatch - Updates the parameters of a single ServerTlsPolicy.
    **/
    networksecurityProjectsLocationsServerTlsPoliciesPatch(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesPatchRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesPatchResponse>;
    /**
     * networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    networksecurityProjectsLocationsServerTlsPoliciesSetIamPolicy(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesSetIamPolicyResponse>;
    /**
     * networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    networksecurityProjectsLocationsServerTlsPoliciesTestIamPermissions(req: operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.NetworksecurityProjectsLocationsServerTlsPoliciesTestIamPermissionsResponse>;
}
