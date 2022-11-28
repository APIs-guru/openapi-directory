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
     * storagetransferProjectsAgentPoolsCreate - Creates an agent pool resource.
    **/
    storagetransferProjectsAgentPoolsCreate(req: operations.StoragetransferProjectsAgentPoolsCreateRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferProjectsAgentPoolsCreateResponse>;
    /**
     * storagetransferProjectsAgentPoolsDelete - Deletes an agent pool.
    **/
    storagetransferProjectsAgentPoolsDelete(req: operations.StoragetransferProjectsAgentPoolsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferProjectsAgentPoolsDeleteResponse>;
    /**
     * storagetransferProjectsAgentPoolsList - Lists agent pools.
    **/
    storagetransferProjectsAgentPoolsList(req: operations.StoragetransferProjectsAgentPoolsListRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferProjectsAgentPoolsListResponse>;
    /**
     * storagetransferProjectsAgentPoolsPatch - Updates an existing agent pool resource.
    **/
    storagetransferProjectsAgentPoolsPatch(req: operations.StoragetransferProjectsAgentPoolsPatchRequest, config?: AxiosRequestConfig): Promise<operations.StoragetransferProjectsAgentPoolsPatchResponse>;
}
