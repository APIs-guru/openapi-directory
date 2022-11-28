import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Metros {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingMetrosList - Retrieves a list of metros.
    **/
    dfareportingMetrosList(req: operations.DfareportingMetrosListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingMetrosListResponse>;
}
