import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Anomalies {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * playdeveloperreportingAnomaliesList - Lists anomalies in any of the datasets.
    **/
    playdeveloperreportingAnomaliesList(req: operations.PlaydeveloperreportingAnomaliesListRequest, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingAnomaliesListResponse>;
}
