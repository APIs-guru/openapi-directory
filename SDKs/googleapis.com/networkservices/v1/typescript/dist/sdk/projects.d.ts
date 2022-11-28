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
     * networkservicesProjectsLocationsEndpointPoliciesCreate - Creates a new EndpointPolicy in a given project and location.
    **/
    networkservicesProjectsLocationsEndpointPoliciesCreate(req: operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsEndpointPoliciesCreateResponse>;
    /**
     * networkservicesProjectsLocationsEndpointPoliciesList - Lists EndpointPolicies in a given project and location.
    **/
    networkservicesProjectsLocationsEndpointPoliciesList(req: operations.NetworkservicesProjectsLocationsEndpointPoliciesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsEndpointPoliciesListResponse>;
    /**
     * networkservicesProjectsLocationsGatewaysCreate - Creates a new Gateway in a given project and location.
    **/
    networkservicesProjectsLocationsGatewaysCreate(req: operations.NetworkservicesProjectsLocationsGatewaysCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsGatewaysCreateResponse>;
    /**
     * networkservicesProjectsLocationsGatewaysList - Lists Gateways in a given project and location.
    **/
    networkservicesProjectsLocationsGatewaysList(req: operations.NetworkservicesProjectsLocationsGatewaysListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsGatewaysListResponse>;
    /**
     * networkservicesProjectsLocationsGrpcRoutesCreate - Creates a new GrpcRoute in a given project and location.
    **/
    networkservicesProjectsLocationsGrpcRoutesCreate(req: operations.NetworkservicesProjectsLocationsGrpcRoutesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsGrpcRoutesCreateResponse>;
    /**
     * networkservicesProjectsLocationsGrpcRoutesList - Lists GrpcRoutes in a given project and location.
    **/
    networkservicesProjectsLocationsGrpcRoutesList(req: operations.NetworkservicesProjectsLocationsGrpcRoutesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsGrpcRoutesListResponse>;
    /**
     * networkservicesProjectsLocationsHttpRoutesCreate - Creates a new HttpRoute in a given project and location.
    **/
    networkservicesProjectsLocationsHttpRoutesCreate(req: operations.NetworkservicesProjectsLocationsHttpRoutesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsHttpRoutesCreateResponse>;
    /**
     * networkservicesProjectsLocationsHttpRoutesList - Lists HttpRoute in a given project and location.
    **/
    networkservicesProjectsLocationsHttpRoutesList(req: operations.NetworkservicesProjectsLocationsHttpRoutesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsHttpRoutesListResponse>;
    /**
     * networkservicesProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    networkservicesProjectsLocationsList(req: operations.NetworkservicesProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsListResponse>;
    /**
     * networkservicesProjectsLocationsMeshesCreate - Creates a new Mesh in a given project and location.
    **/
    networkservicesProjectsLocationsMeshesCreate(req: operations.NetworkservicesProjectsLocationsMeshesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsMeshesCreateResponse>;
    /**
     * networkservicesProjectsLocationsMeshesList - Lists Meshes in a given project and location.
    **/
    networkservicesProjectsLocationsMeshesList(req: operations.NetworkservicesProjectsLocationsMeshesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsMeshesListResponse>;
    /**
     * networkservicesProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    networkservicesProjectsLocationsOperationsCancel(req: operations.NetworkservicesProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsOperationsCancelResponse>;
    /**
     * networkservicesProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    networkservicesProjectsLocationsOperationsList(req: operations.NetworkservicesProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsOperationsListResponse>;
    /**
     * networkservicesProjectsLocationsServiceBindingsCreate - Creates a new ServiceBinding in a given project and location.
    **/
    networkservicesProjectsLocationsServiceBindingsCreate(req: operations.NetworkservicesProjectsLocationsServiceBindingsCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsServiceBindingsCreateResponse>;
    /**
     * networkservicesProjectsLocationsServiceBindingsGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    networkservicesProjectsLocationsServiceBindingsGetIamPolicy(req: operations.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsServiceBindingsGetIamPolicyResponse>;
    /**
     * networkservicesProjectsLocationsServiceBindingsList - Lists ServiceBinding in a given project and location.
    **/
    networkservicesProjectsLocationsServiceBindingsList(req: operations.NetworkservicesProjectsLocationsServiceBindingsListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsServiceBindingsListResponse>;
    /**
     * networkservicesProjectsLocationsServiceBindingsSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    networkservicesProjectsLocationsServiceBindingsSetIamPolicy(req: operations.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsServiceBindingsSetIamPolicyResponse>;
    /**
     * networkservicesProjectsLocationsServiceBindingsTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    networkservicesProjectsLocationsServiceBindingsTestIamPermissions(req: operations.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsServiceBindingsTestIamPermissionsResponse>;
    /**
     * networkservicesProjectsLocationsTcpRoutesCreate - Creates a new TcpRoute in a given project and location.
    **/
    networkservicesProjectsLocationsTcpRoutesCreate(req: operations.NetworkservicesProjectsLocationsTcpRoutesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTcpRoutesCreateResponse>;
    /**
     * networkservicesProjectsLocationsTcpRoutesList - Lists TcpRoute in a given project and location.
    **/
    networkservicesProjectsLocationsTcpRoutesList(req: operations.NetworkservicesProjectsLocationsTcpRoutesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTcpRoutesListResponse>;
    /**
     * networkservicesProjectsLocationsTlsRoutesCreate - Creates a new TlsRoute in a given project and location.
    **/
    networkservicesProjectsLocationsTlsRoutesCreate(req: operations.NetworkservicesProjectsLocationsTlsRoutesCreateRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTlsRoutesCreateResponse>;
    /**
     * networkservicesProjectsLocationsTlsRoutesDelete - Deletes a single TlsRoute.
    **/
    networkservicesProjectsLocationsTlsRoutesDelete(req: operations.NetworkservicesProjectsLocationsTlsRoutesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTlsRoutesDeleteResponse>;
    /**
     * networkservicesProjectsLocationsTlsRoutesGet - Gets details of a single TlsRoute.
    **/
    networkservicesProjectsLocationsTlsRoutesGet(req: operations.NetworkservicesProjectsLocationsTlsRoutesGetRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTlsRoutesGetResponse>;
    /**
     * networkservicesProjectsLocationsTlsRoutesList - Lists TlsRoute in a given project and location.
    **/
    networkservicesProjectsLocationsTlsRoutesList(req: operations.NetworkservicesProjectsLocationsTlsRoutesListRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTlsRoutesListResponse>;
    /**
     * networkservicesProjectsLocationsTlsRoutesPatch - Updates the parameters of a single TlsRoute.
    **/
    networkservicesProjectsLocationsTlsRoutesPatch(req: operations.NetworkservicesProjectsLocationsTlsRoutesPatchRequest, config?: AxiosRequestConfig): Promise<operations.NetworkservicesProjectsLocationsTlsRoutesPatchResponse>;
}
