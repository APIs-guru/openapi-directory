import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Performance {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceAppliancePerformance - Return the performance score for a single MX
     *
     * Return the performance score for a single MX. Only primary MX devices supported. If no data is available, a 204 error code is returned.
    **/
    getDeviceAppliancePerformance(req: operations.GetDeviceAppliancePerformanceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceAppliancePerformanceResponse>;
}
