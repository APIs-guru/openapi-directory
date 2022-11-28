import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Interfaces {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createDeviceSwitchRoutingInterface - Create a layer 3 interface for a switch
     *
     * Create a layer 3 interface for a switch
    **/
    createDeviceSwitchRoutingInterface(req: operations.CreateDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingInterfaceResponse>;
    /**
     * createNetworkSwitchStackRoutingInterface - Create a layer 3 interface for a switch stack
     *
     * Create a layer 3 interface for a switch stack
    **/
    createNetworkSwitchStackRoutingInterface(req: operations.CreateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * deleteDeviceSwitchRoutingInterface - Delete a layer 3 interface from the switch
     *
     * Delete a layer 3 interface from the switch
    **/
    deleteDeviceSwitchRoutingInterface(req: operations.DeleteDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingInterfaceResponse>;
    /**
     * deleteNetworkSwitchStackRoutingInterface - Delete a layer 3 interface from a switch stack
     *
     * Delete a layer 3 interface from a switch stack
    **/
    deleteNetworkSwitchStackRoutingInterface(req: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * getDeviceSwitchRoutingInterface - Return a layer 3 interface for a switch
     *
     * Return a layer 3 interface for a switch
    **/
    getDeviceSwitchRoutingInterface(req: operations.GetDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceResponse>;
    /**
     * getDeviceSwitchRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch
     *
     * Return a layer 3 interface DHCP configuration for a switch
    **/
    getDeviceSwitchRoutingInterfaceDhcp(req: operations.GetDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * getDeviceSwitchRoutingInterfaces - List layer 3 interfaces for a switch
     *
     * List layer 3 interfaces for a switch
    **/
    getDeviceSwitchRoutingInterfaces(req: operations.GetDeviceSwitchRoutingInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingInterfacesResponse>;
    /**
     * getNetworkSwitchStackRoutingInterface - Return a layer 3 interface from a switch stack
     *
     * Return a layer 3 interface from a switch stack
    **/
    getNetworkSwitchStackRoutingInterface(req: operations.GetNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * getNetworkSwitchStackRoutingInterfaceDhcp - Return a layer 3 interface DHCP configuration for a switch stack
     *
     * Return a layer 3 interface DHCP configuration for a switch stack
    **/
    getNetworkSwitchStackRoutingInterfaceDhcp(req: operations.GetNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfaceDhcpResponse>;
    /**
     * getNetworkSwitchStackRoutingInterfaces - List layer 3 interfaces for a switch stack
     *
     * List layer 3 interfaces for a switch stack
    **/
    getNetworkSwitchStackRoutingInterfaces(req: operations.GetNetworkSwitchStackRoutingInterfacesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingInterfacesResponse>;
    /**
     * updateDeviceSwitchRoutingInterface - Update a layer 3 interface for a switch
     *
     * Update a layer 3 interface for a switch
    **/
    updateDeviceSwitchRoutingInterface(req: operations.UpdateDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceResponse>;
    /**
     * updateDeviceSwitchRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch
     *
     * Update a layer 3 interface DHCP configuration for a switch
    **/
    updateDeviceSwitchRoutingInterfaceDhcp(req: operations.UpdateDeviceSwitchRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingInterfaceDhcpResponse>;
    /**
     * updateNetworkSwitchStackRoutingInterface - Update a layer 3 interface for a switch stack
     *
     * Update a layer 3 interface for a switch stack
    **/
    updateNetworkSwitchStackRoutingInterface(req: operations.UpdateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * updateNetworkSwitchStackRoutingInterfaceDhcp - Update a layer 3 interface DHCP configuration for a switch stack
     *
     * Update a layer 3 interface DHCP configuration for a switch stack
    **/
    updateNetworkSwitchStackRoutingInterfaceDhcp(req: operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingInterfaceDhcpResponse>;
}
