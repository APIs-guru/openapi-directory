import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Dhcp {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getDeviceApplianceDhcpSubnets - Return the DHCP subnet information for an appliance
     *
     * Return the DHCP subnet information for an appliance
    **/
    getDeviceApplianceDhcpSubnets(req: operations.GetDeviceApplianceDhcpSubnetsRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceApplianceDhcpSubnetsResponse>;
    /**
     * getDeviceSwitchRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch
     *
     * Return a layer 3 interface DHCP configuration for a switch
    **/
    getDeviceSwitchRoutingInterfaceDhcp(req: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * getNetworkCellularGatewayDhcp - List common DHCP settings of MGs
     *
     * List common DHCP settings of MGs
    **/
    getNetworkCellularGatewayDhcp(req: operations.GetNetworkCellularGatewayDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkCellularGatewayDhcpResponse>;
    /**
     * getNetworkSwitchStackRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch stack
     *
     * Return a layer 3 interface DHCP configuration for a switch stack
    **/
    getNetworkSwitchStackRoutingInterfaceDhcp(req: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse>;
    /**
     * updateDeviceSwitchRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch
     *
     * Update a layer 3 interface DHCP configuration for a switch
    **/
    updateDeviceSwitchRoutingInterfaceDhcp(req: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * updateNetworkCellularGatewayDhcp - Update common DHCP settings of MGs
     *
     * Update common DHCP settings of MGs
    **/
    updateNetworkCellularGatewayDhcp(req: operations.UpdateNetworkCellularGatewayDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkCellularGatewayDhcpResponse>;
    /**
     * updateNetworkSwitchStackRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch stack
     *
     * Update a layer 3 interface DHCP configuration for a switch stack
    **/
    updateNetworkSwitchStackRoutingInterfaceDhcp(req: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse>;
}
