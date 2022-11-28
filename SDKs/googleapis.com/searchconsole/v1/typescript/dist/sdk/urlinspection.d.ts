import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UrlInspection {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * searchconsoleUrlInspectionIndexInspect - Index inspection.
    **/
    searchconsoleUrlInspectionIndexInspect(req: operations.SearchconsoleUrlInspectionIndexInspectRequest, config?: AxiosRequestConfig): Promise<operations.SearchconsoleUrlInspectionIndexInspectResponse>;
}
