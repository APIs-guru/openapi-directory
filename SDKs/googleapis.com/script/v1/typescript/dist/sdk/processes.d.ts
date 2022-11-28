import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Processes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * scriptProcessesList - List information about processes made by or on behalf of a user, such as process type and current status.
    **/
    scriptProcessesList(req: operations.ScriptProcessesListRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProcessesListResponse>;
    /**
     * scriptProcessesListScriptProcesses - List information about a script's executed processes, such as process type and current status.
    **/
    scriptProcessesListScriptProcesses(req: operations.ScriptProcessesListScriptProcessesRequest, config?: AxiosRequestConfig): Promise<operations.ScriptProcessesListScriptProcessesResponse>;
}
