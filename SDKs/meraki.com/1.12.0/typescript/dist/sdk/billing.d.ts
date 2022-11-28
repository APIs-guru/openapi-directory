import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Billing {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkWirelessBilling - Return the billing settings of this network
     *
     * Return the billing settings of this network
    **/
    getNetworkWirelessBilling(req: operations.GetNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessBillingResponse>;
    /**
     * updateNetworkWirelessBilling - Update the billing settings
     *
     * Update the billing settings
    **/
    updateNetworkWirelessBilling(req: operations.UpdateNetworkWirelessBillingRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessBillingResponse>;
}
