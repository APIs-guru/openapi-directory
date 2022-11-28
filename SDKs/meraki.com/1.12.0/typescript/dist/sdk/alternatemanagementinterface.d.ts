import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AlternateManagementInterface {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworkSwitchAlternateManagementInterface - Return the switch alternate management interface for the network
     *
     * Return the switch alternate management interface for the network
    **/
    getNetworkSwitchAlternateManagementInterface(req: operations.GetNetworkSwitchAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchAlternateManagementInterfaceResponse>;
    /**
     * getNetworkWirelessAlternateManagementInterface - Return alternate management interface and devices with IP assigned
     *
     * Return alternate management interface and devices with IP assigned
    **/
    getNetworkWirelessAlternateManagementInterface(req: operations.GetNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkWirelessAlternateManagementInterfaceResponse>;
    /**
     * updateNetworkSwitchAlternateManagementInterface - Update the switch alternate management interface for the network
     *
     * Update the switch alternate management interface for the network
    **/
    updateNetworkSwitchAlternateManagementInterface(req: operations.UpdateNetworkSwitchAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchAlternateManagementInterfaceResponse>;
    /**
     * updateNetworkWirelessAlternateManagementInterface - Update alternate management interface and device static IP
     *
     * Update alternate management interface and device static IP
    **/
    updateNetworkWirelessAlternateManagementInterface(req: operations.UpdateNetworkWirelessAlternateManagementInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkWirelessAlternateManagementInterfaceResponse>;
}
