import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Stats {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * retrieveCurrentNeoStatistics - Get the Near Earth Object data set totals
     *
     * retrieveCurrentNeoStatistics
    **/
    retrieveCurrentNeoStatistics(config?: AxiosRequestConfig): Promise<operations.RetrieveCurrentNeoStatisticsResponse>;
}
