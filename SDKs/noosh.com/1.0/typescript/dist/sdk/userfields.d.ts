import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UserFields {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getProjectHomeUserFieldListOfClient - List projec home user fields of client workgroup
     *
     * List projec home user fields of client workgroup
    **/
    getProjectHomeUserFieldListOfClient(req: operations.GetProjectHomeUserFieldListOfClientRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectHomeUserFieldListOfClientResponse>;
    /**
     * getProjectHomeUserFieldsList - List projec home user fields
     *
     * List projec home user fields
    **/
    getProjectHomeUserFieldsList(req: operations.GetProjectHomeUserFieldsListRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectHomeUserFieldsListResponse>;
}
