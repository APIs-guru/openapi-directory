import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Flags {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * sqlFlagsList - Lists all available database flags for Cloud SQL instances.
    **/
    sqlFlagsList(req: operations.SqlFlagsListRequest, config?: AxiosRequestConfig): Promise<operations.SqlFlagsListResponse>;
}
