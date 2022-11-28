import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Vitals {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * playdeveloperreportingVitalsErrorsIssuesSearch - Searches all error issues in which reports have been grouped.
    **/
    playdeveloperreportingVitalsErrorsIssuesSearch(req: operations.PlaydeveloperreportingVitalsErrorsIssuesSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingVitalsErrorsIssuesSearchResponse>;
    /**
     * playdeveloperreportingVitalsErrorsReportsSearch - Searches all error reports received for an app.
    **/
    playdeveloperreportingVitalsErrorsReportsSearch(req: operations.PlaydeveloperreportingVitalsErrorsReportsSearchRequest, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingVitalsErrorsReportsSearchResponse>;
    /**
     * playdeveloperreportingVitalsStuckbackgroundwakelockrateGet - Describes the properties of the metric set.
    **/
    playdeveloperreportingVitalsStuckbackgroundwakelockrateGet(req: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse>;
    /**
     * playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery - Queries the metrics in the metric set.
    **/
    playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery(req: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse>;
}
