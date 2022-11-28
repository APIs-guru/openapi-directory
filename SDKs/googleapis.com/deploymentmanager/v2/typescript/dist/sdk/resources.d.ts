import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Resources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deploymentmanagerResourcesGet - Gets information about a single resource.
    **/
    deploymentmanagerResourcesGet(req: operations.DeploymentmanagerResourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerResourcesGetResponse>;
    /**
     * deploymentmanagerResourcesList - Lists all resources in a given deployment.
    **/
    deploymentmanagerResourcesList(req: operations.DeploymentmanagerResourcesListRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerResourcesListResponse>;
}
