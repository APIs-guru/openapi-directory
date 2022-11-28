import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class TypeProviders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deploymentmanagerTypeProvidersDelete - Deletes a type provider.
    **/
    deploymentmanagerTypeProvidersDelete(req: operations.DeploymentmanagerTypeProvidersDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersDeleteResponse>;
    /**
     * deploymentmanagerTypeProvidersGet - Gets information about a specific type provider.
    **/
    deploymentmanagerTypeProvidersGet(req: operations.DeploymentmanagerTypeProvidersGetRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersGetResponse>;
    /**
     * deploymentmanagerTypeProvidersGetType - Gets a type info for a type provided by a TypeProvider.
    **/
    deploymentmanagerTypeProvidersGetType(req: operations.DeploymentmanagerTypeProvidersGetTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersGetTypeResponse>;
    /**
     * deploymentmanagerTypeProvidersInsert - Creates a type provider.
    **/
    deploymentmanagerTypeProvidersInsert(req: operations.DeploymentmanagerTypeProvidersInsertRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersInsertResponse>;
    /**
     * deploymentmanagerTypeProvidersList - Lists all resource type providers for Deployment Manager.
    **/
    deploymentmanagerTypeProvidersList(req: operations.DeploymentmanagerTypeProvidersListRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersListResponse>;
    /**
     * deploymentmanagerTypeProvidersListTypes - Lists all the type info for a TypeProvider.
    **/
    deploymentmanagerTypeProvidersListTypes(req: operations.DeploymentmanagerTypeProvidersListTypesRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersListTypesResponse>;
    /**
     * deploymentmanagerTypeProvidersPatch - Patches a type provider.
    **/
    deploymentmanagerTypeProvidersPatch(req: operations.DeploymentmanagerTypeProvidersPatchRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersPatchResponse>;
    /**
     * deploymentmanagerTypeProvidersUpdate - Updates a type provider.
    **/
    deploymentmanagerTypeProvidersUpdate(req: operations.DeploymentmanagerTypeProvidersUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerTypeProvidersUpdateResponse>;
}
