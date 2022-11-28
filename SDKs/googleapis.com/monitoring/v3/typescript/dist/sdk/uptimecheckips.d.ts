import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class UptimeCheckIps {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * monitoringUptimeCheckIpsList - Returns the list of IP addresses that checkers run from
    **/
    monitoringUptimeCheckIpsList(req: operations.MonitoringUptimeCheckIpsListRequest, config?: AxiosRequestConfig): Promise<operations.MonitoringUptimeCheckIpsListResponse>;
}
