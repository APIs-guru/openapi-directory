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
     * networkconnectivityProjectsLocationsGlobalHubsCreate - Creates a new Network Connectivity Center hub in the specified project.
    **/
    networkconnectivityProjectsLocationsGlobalHubsCreate(req: operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsGlobalHubsCreateResponse>;
    /**
     * networkconnectivityProjectsLocationsGlobalHubsList - Lists the Network Connectivity Center hubs associated with a given project.
    **/
    networkconnectivityProjectsLocationsGlobalHubsList(req: operations.NetworkconnectivityProjectsLocationsGlobalHubsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsGlobalHubsListResponse>;
    /**
     * networkconnectivityProjectsLocationsInternalRangesCreate - Creates a new InternalRange in a given project and location.
    **/
    networkconnectivityProjectsLocationsInternalRangesCreate(req: operations.NetworkconnectivityProjectsLocationsInternalRangesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsInternalRangesCreateResponse>;
    /**
     * networkconnectivityProjectsLocationsInternalRangesList - Lists InternalRanges in a given project and location.
    **/
    networkconnectivityProjectsLocationsInternalRangesList(req: operations.NetworkconnectivityProjectsLocationsInternalRangesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsInternalRangesListResponse>;
    /**
     * networkconnectivityProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    networkconnectivityProjectsLocationsList(req: operations.NetworkconnectivityProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsListResponse>;
    /**
     * networkconnectivityProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    networkconnectivityProjectsLocationsOperationsCancel(req: operations.NetworkconnectivityProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsOperationsCancelResponse>;
    /**
     * networkconnectivityProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    networkconnectivityProjectsLocationsOperationsList(req: operations.NetworkconnectivityProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsOperationsListResponse>;
    /**
     * networkconnectivityProjectsLocationsSpokesCreate - Creates a Network Connectivity Center spoke.
    **/
    networkconnectivityProjectsLocationsSpokesCreate(req: operations.NetworkconnectivityProjectsLocationsSpokesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesCreateResponse>;
    /**
     * networkconnectivityProjectsLocationsSpokesDelete - Deletes a Network Connectivity Center spoke.
    **/
    networkconnectivityProjectsLocationsSpokesDelete(req: operations.NetworkconnectivityProjectsLocationsSpokesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesDeleteResponse>;
    /**
     * networkconnectivityProjectsLocationsSpokesGet - Gets details about a Network Connectivity Center spoke.
    **/
    networkconnectivityProjectsLocationsSpokesGet(req: operations.NetworkconnectivityProjectsLocationsSpokesGetRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesGetResponse>;
    /**
     * networkconnectivityProjectsLocationsSpokesGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    networkconnectivityProjectsLocationsSpokesGetIamPolicy(req: operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesGetIamPolicyResponse>;
    /**
     * networkconnectivityProjectsLocationsSpokesList - Lists the Network Connectivity Center spokes in a specified project and location.
    **/
    networkconnectivityProjectsLocationsSpokesList(req: operations.NetworkconnectivityProjectsLocationsSpokesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesListResponse>;
    /**
     * networkconnectivityProjectsLocationsSpokesPatch - Updates the parameters of a Network Connectivity Center spoke.
    **/
    networkconnectivityProjectsLocationsSpokesPatch(req: operations.NetworkconnectivityProjectsLocationsSpokesPatchRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesPatchResponse>;
    /**
     * networkconnectivityProjectsLocationsSpokesSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    networkconnectivityProjectsLocationsSpokesSetIamPolicy(req: operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesSetIamPolicyResponse>;
    /**
     * networkconnectivityProjectsLocationsSpokesTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    networkconnectivityProjectsLocationsSpokesTestIamPermissions(req: operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.NetworkconnectivityProjectsLocationsSpokesTestIamPermissionsResponse>;
}
