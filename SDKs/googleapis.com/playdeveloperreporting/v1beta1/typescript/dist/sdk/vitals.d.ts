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
     * playdeveloperreportingVitalsStuckbackgroundwakelockrateGet - Describes the properties of the metric set.
    **/
    playdeveloperreportingVitalsStuckbackgroundwakelockrateGet(req: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetRequest, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateGetResponse>;
    /**
     * playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery - Queries the metrics in the metric set.
    **/
    playdeveloperreportingVitalsStuckbackgroundwakelockrateQuery(req: operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryRequest, config?: AxiosRequestConfig): Promise<operations.PlaydeveloperreportingVitalsStuckbackgroundwakelockrateQueryResponse>;
}
