import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Manifests {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deploymentmanagerManifestsGet - Gets information about a specific manifest.
    **/
    deploymentmanagerManifestsGet(req: operations.DeploymentmanagerManifestsGetRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerManifestsGetResponse>;
    /**
     * deploymentmanagerManifestsList - Lists all manifests for a given deployment.
    **/
    deploymentmanagerManifestsList(req: operations.DeploymentmanagerManifestsListRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerManifestsListResponse>;
}
