import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Workspaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getWorkspaces - Get all workspaces for the current user
    **/
    getWorkspaces(req: operations.GetWorkspacesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesResponse>;
    /**
     * getWorkspacesWorkspaceId - Get a workspace
    **/
    getWorkspacesWorkspaceId(req: operations.GetWorkspacesWorkspaceIdRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspacesWorkspaceIdResponse>;
}
