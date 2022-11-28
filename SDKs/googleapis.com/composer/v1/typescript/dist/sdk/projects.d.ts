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
     * composerProjectsLocationsEnvironmentsCreate - Create a new environment.
    **/
    composerProjectsLocationsEnvironmentsCreate(req: operations.ComposerProjectsLocationsEnvironmentsCreateRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsCreateResponse>;
    /**
     * composerProjectsLocationsEnvironmentsList - List environments.
    **/
    composerProjectsLocationsEnvironmentsList(req: operations.ComposerProjectsLocationsEnvironmentsListRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsListResponse>;
    /**
     * composerProjectsLocationsEnvironmentsPatch - Update an environment.
    **/
    composerProjectsLocationsEnvironmentsPatch(req: operations.ComposerProjectsLocationsEnvironmentsPatchRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsEnvironmentsPatchResponse>;
    /**
     * composerProjectsLocationsImageVersionsList - List ImageVersions for provided location.
    **/
    composerProjectsLocationsImageVersionsList(req: operations.ComposerProjectsLocationsImageVersionsListRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsImageVersionsListResponse>;
    /**
     * composerProjectsLocationsOperationsDelete - Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
    **/
    composerProjectsLocationsOperationsDelete(req: operations.ComposerProjectsLocationsOperationsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsDeleteResponse>;
    /**
     * composerProjectsLocationsOperationsGet - Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
    **/
    composerProjectsLocationsOperationsGet(req: operations.ComposerProjectsLocationsOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsGetResponse>;
    /**
     * composerProjectsLocationsOperationsList - Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`. NOTE: the `name` binding allows API services to override the binding to use different resource name schemes, such as `users/* /operations`. To override the binding, API services can add a binding such as `"/v1/{name=users/*}/operations"` to their service configuration. For backwards compatibility, the default name includes the operations collection id, however overriding users must ensure the name binding is the parent resource, without the operations collection id.
    **/
    composerProjectsLocationsOperationsList(req: operations.ComposerProjectsLocationsOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.ComposerProjectsLocationsOperationsListResponse>;
}
