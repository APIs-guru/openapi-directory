import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CellularUsageHistory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSmDeviceCellularUsageHistory - Return the client's daily cellular data usage history
     *
     * Return the client's daily cellular data usage history. Usage data is in kilobytes.
    **/
    getNetworkSmDeviceCellularUsageHistory(req: operations.GetNetworkSmDeviceCellularUsageHistoryRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSmDeviceCellularUsageHistoryResponse>;
}
