import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProjectStatus {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getProjectStatus - List the project status
     *
     * List the project status
    **/
    getProjectStatus(req: operations.GetProjectStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStatusResponse>;
    /**
     * getProjectStatusOfClient - List the project status of client
     *
     * List the project status of client
    **/
    getProjectStatusOfClient(req: operations.GetProjectStatusOfClientRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectStatusOfClientResponse>;
}
