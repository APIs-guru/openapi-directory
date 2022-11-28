import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Operations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deploymentmanagerOperationsGet - Gets information about a specific operation.
    **/
    deploymentmanagerOperationsGet(req: operations.DeploymentmanagerOperationsGetRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerOperationsGetResponse>;
    /**
     * deploymentmanagerOperationsList - Lists all operations for a project.
    **/
    deploymentmanagerOperationsList(req: operations.DeploymentmanagerOperationsListRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerOperationsListResponse>;
}
