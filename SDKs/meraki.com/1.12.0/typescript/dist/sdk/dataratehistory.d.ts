import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class DataRateHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkWirelessDataRateHistory - Return PHY data rates over time for a network, device, or network client
     *
     * Return PHY data rates over time for a network, device, or network client
    **/
    getNetworkWirelessDataRateHistory(req: operations.GetNetworkWirelessDataRateHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessDataRateHistoryResponse>;
}
