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
     * gkehubProjectsLocationsFeaturesCreate - Adds a new Feature.
    **/
    gkehubProjectsLocationsFeaturesCreate(req: operations.GkehubProjectsLocationsFeaturesCreateRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsFeaturesCreateResponse>;
    /**
     * gkehubProjectsLocationsFeaturesList - Lists Features in a given project and location.
    **/
    gkehubProjectsLocationsFeaturesList(req: operations.GkehubProjectsLocationsFeaturesListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsFeaturesListResponse>;
    /**
     * gkehubProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    gkehubProjectsLocationsList(req: operations.GkehubProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsListResponse>;
    /**
     * gkehubProjectsLocationsMembershipsCreate - Creates a new Membership. **This is currently only supported for GKE clusters on Google Cloud**. To register other clusters, follow the instructions at https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster.
    **/
    gkehubProjectsLocationsMembershipsCreate(req: operations.GkehubProjectsLocationsMembershipsCreateRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsCreateResponse>;
    /**
     * gkehubProjectsLocationsMembershipsGenerateConnectManifest - Generates the manifest for deployment of the GKE connect agent. **This method is used internally by Google-provided libraries.** Most clients should not need to call this method directly.
    **/
    gkehubProjectsLocationsMembershipsGenerateConnectManifest(req: operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsGenerateConnectManifestResponse>;
    /**
     * gkehubProjectsLocationsMembershipsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    gkehubProjectsLocationsMembershipsGetIamPolicy(req: operations.GkehubProjectsLocationsMembershipsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsGetIamPolicyResponse>;
    /**
     * gkehubProjectsLocationsMembershipsList - Lists Memberships in a given project and location.
    **/
    gkehubProjectsLocationsMembershipsList(req: operations.GkehubProjectsLocationsMembershipsListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsListResponse>;
    /**
     * gkehubProjectsLocationsMembershipsPatch - Updates an existing Membership.
    **/
    gkehubProjectsLocationsMembershipsPatch(req: operations.GkehubProjectsLocationsMembershipsPatchRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsPatchResponse>;
    /**
     * gkehubProjectsLocationsMembershipsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    gkehubProjectsLocationsMembershipsSetIamPolicy(req: operations.GkehubProjectsLocationsMembershipsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsSetIamPolicyResponse>;
    /**
     * gkehubProjectsLocationsMembershipsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    gkehubProjectsLocationsMembershipsTestIamPermissions(req: operations.GkehubProjectsLocationsMembershipsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsMembershipsTestIamPermissionsResponse>;
    /**
     * gkehubProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    gkehubProjectsLocationsOperationsCancel(req: operations.GkehubProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsCancelResponse>;
    /**
     * gkehubProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    gkehubProjectsLocationsOperationsDelete(req: operations.GkehubProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsDeleteResponse>;
    /**
     * gkehubProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    gkehubProjectsLocationsOperationsGet(req: operations.GkehubProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsGetResponse>;
    /**
     * gkehubProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    gkehubProjectsLocationsOperationsList(req: operations.GkehubProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.GkehubProjectsLocationsOperationsListResponse>;
}
