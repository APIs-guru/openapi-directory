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
     * getResourcesJson - Get Resources by search query
     *
     * Global search
    **/
    getResourcesJson(req: operations.GetResourcesJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcesJsonResponse>;
}
