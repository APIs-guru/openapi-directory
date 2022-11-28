import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class SignalQualityHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkWirelessSignalQualityHistory - Return signal quality (SNR/RSSI) over time for a device or network client
     *
     * Return signal quality (SNR/RSSI) over time for a device or network client
    **/
    getNetworkWirelessSignalQualityHistory(req: operations.GetNetworkWirelessSignalQualityHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessSignalQualityHistoryResponse>;
}
