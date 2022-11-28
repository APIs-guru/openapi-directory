import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CompositeTypes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deploymentmanagerCompositeTypesDelete - Deletes a composite type.
    **/
    deploymentmanagerCompositeTypesDelete(req: operations.DeploymentmanagerCompositeTypesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesDeleteResponse>;
    /**
     * deploymentmanagerCompositeTypesGet - Gets information about a specific composite type.
    **/
    deploymentmanagerCompositeTypesGet(req: operations.DeploymentmanagerCompositeTypesGetRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesGetResponse>;
    /**
     * deploymentmanagerCompositeTypesInsert - Creates a composite type.
    **/
    deploymentmanagerCompositeTypesInsert(req: operations.DeploymentmanagerCompositeTypesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesInsertResponse>;
    /**
     * deploymentmanagerCompositeTypesList - Lists all composite types for Deployment Manager.
    **/
    deploymentmanagerCompositeTypesList(req: operations.DeploymentmanagerCompositeTypesListRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesListResponse>;
    /**
     * deploymentmanagerCompositeTypesPatch - Patches a composite type.
    **/
    deploymentmanagerCompositeTypesPatch(req: operations.DeploymentmanagerCompositeTypesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesPatchResponse>;
    /**
     * deploymentmanagerCompositeTypesUpdate - Updates a composite type.
    **/
    deploymentmanagerCompositeTypesUpdate(req: operations.DeploymentmanagerCompositeTypesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DeploymentmanagerCompositeTypesUpdateResponse>;
}
