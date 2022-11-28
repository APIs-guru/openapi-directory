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
     * connectorsProjectsLocationsConnectionsCreate - Creates a new Connection in a given project and location.
    **/
    connectorsProjectsLocationsConnectionsCreate(req: operations.ConnectorsProjectsLocationsConnectionsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsCreateResponse>;
    /**
     * connectorsProjectsLocationsConnectionsList - Lists Connections in a given project and location.
    **/
    connectorsProjectsLocationsConnectionsList(req: operations.ConnectorsProjectsLocationsConnectionsListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsListResponse>;
    /**
     * connectorsProjectsLocationsConnectionsPatch - Updates the parameters of a single Connection.
    **/
    connectorsProjectsLocationsConnectionsPatch(req: operations.ConnectorsProjectsLocationsConnectionsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsPatchResponse>;
    /**
     * connectorsProjectsLocationsConnectionsRuntimeActionSchemasList - List schema of a runtime actions filtered by action name.
    **/
    connectorsProjectsLocationsConnectionsRuntimeActionSchemasList(req: operations.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsRuntimeActionSchemasListResponse>;
    /**
     * connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList - List schema of a runtime entities filtered by entity name.
    **/
    connectorsProjectsLocationsConnectionsRuntimeEntitySchemasList(req: operations.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsConnectionsRuntimeEntitySchemasListResponse>;
    /**
     * connectorsProjectsLocationsList - Lists information about the supported locations for this service.
    **/
    connectorsProjectsLocationsList(req: operations.ConnectorsProjectsLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsListResponse>;
    /**
     * connectorsProjectsLocationsOperationsCancel - Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
    **/
    connectorsProjectsLocationsOperationsCancel(req: operations.ConnectorsProjectsLocationsOperationsCancelRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsOperationsCancelResponse>;
    /**
     * connectorsProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    connectorsProjectsLocationsOperationsDelete(req: operations.ConnectorsProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsOperationsDeleteResponse>;
    /**
     * connectorsProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    connectorsProjectsLocationsOperationsList(req: operations.ConnectorsProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsOperationsListResponse>;
    /**
     * connectorsProjectsLocationsProvidersConnectorsList - Lists Connectors in a given project and location.
    **/
    connectorsProjectsLocationsProvidersConnectorsList(req: operations.ConnectorsProjectsLocationsProvidersConnectorsListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersConnectorsListResponse>;
    /**
     * connectorsProjectsLocationsProvidersConnectorsVersionsGet - Gets details of a single connector version.
    **/
    connectorsProjectsLocationsProvidersConnectorsVersionsGet(req: operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsGetResponse>;
    /**
     * connectorsProjectsLocationsProvidersConnectorsVersionsList - Lists Connector Versions in a given project and location.
    **/
    connectorsProjectsLocationsProvidersConnectorsVersionsList(req: operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersConnectorsVersionsListResponse>;
    /**
     * connectorsProjectsLocationsProvidersGetIamPolicy - Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
    **/
    connectorsProjectsLocationsProvidersGetIamPolicy(req: operations.ConnectorsProjectsLocationsProvidersGetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersGetIamPolicyResponse>;
    /**
     * connectorsProjectsLocationsProvidersList - Lists Providers in a given project and location.
    **/
    connectorsProjectsLocationsProvidersList(req: operations.ConnectorsProjectsLocationsProvidersListRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersListResponse>;
    /**
     * connectorsProjectsLocationsProvidersSetIamPolicy - Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
    **/
    connectorsProjectsLocationsProvidersSetIamPolicy(req: operations.ConnectorsProjectsLocationsProvidersSetIamPolicyRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersSetIamPolicyResponse>;
    /**
     * connectorsProjectsLocationsProvidersTestIamPermissions - Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
    **/
    connectorsProjectsLocationsProvidersTestIamPermissions(req: operations.ConnectorsProjectsLocationsProvidersTestIamPermissionsRequest, config?: AxiosRequestConfig): Promise<operations.ConnectorsProjectsLocationsProvidersTestIamPermissionsResponse>;
}
