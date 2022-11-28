import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Stacks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addNetworkSwitchStack - Add a switch to a stack
     *
     * Add a switch to a stack
    **/
    addNetworkSwitchStack(req: operations.AddNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.AddNetworkSwitchStackResponse>;
    /**
     * createNetworkSwitchStack - Create a stack
     *
     * Create a stack
    **/
    createNetworkSwitchStack(req: operations.CreateNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackResponse>;
    /**
     * createNetworkSwitchStackRoutingInterface - Create a layer 3 interface for a switch stack
     *
     * Create a layer 3 interface for a switch stack
    **/
    createNetworkSwitchStackRoutingInterface(req: operations.CreateNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * createNetworkSwitchStackRoutingStaticRoute - Create a layer 3 static route for a switch stack
     *
     * Create a layer 3 static route for a switch stack
    **/
    createNetworkSwitchStackRoutingStaticRoute(req: operations.CreateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * deleteNetworkSwitchStack - Delete a stack
     *
     * Delete a stack
    **/
    deleteNetworkSwitchStack(req: operations.DeleteNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackResponse>;
    /**
     * deleteNetworkSwitchStackRoutingInterface - Delete a layer 3 interface from a switch stack
     *
     * Delete a layer 3 interface from a switch stack
    **/
    deleteNetworkSwitchStackRoutingInterface(req: operations.DeleteNetworkSwitchStackRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingInterfaceResponse>;
    /**
     * deleteNetworkSwitchStackRoutingStaticRoute - Delete a layer 3 static route for a switch stack
     *
     * Delete a layer 3 static route for a switch stack
    **/
    deleteNetworkSwitchStackRoutingStaticRoute(req: operations.DeleteNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * getNetworkSwitchStack - Show a switch stack
     *
     * Show a switch stack
    **/
    getNetworkSwitchStack(req: operations.GetNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackResponse>;
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
     * getNetworkSwitchStackRoutingStaticRoute - Return a layer 3 static route for a switch stack
     *
     * Return a layer 3 static route for a switch stack
    **/
    getNetworkSwitchStackRoutingStaticRoute(req: operations.GetNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingStaticRouteResponse>;
    /**
     * getNetworkSwitchStackRoutingStaticRoutes - List layer 3 static routes for a switch stack
     *
     * List layer 3 static routes for a switch stack
    **/
    getNetworkSwitchStackRoutingStaticRoutes(req: operations.GetNetworkSwitchStackRoutingStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStackRoutingStaticRoutesResponse>;
    /**
     * getNetworkSwitchStacks - List the switch stacks in a network
     *
     * List the switch stacks in a network
    **/
    getNetworkSwitchStacks(req: operations.GetNetworkSwitchStacksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchStacksResponse>;
    /**
     * removeNetworkSwitchStack - Remove a switch from a stack
     *
     * Remove a switch from a stack
    **/
    removeNetworkSwitchStack(req: operations.RemoveNetworkSwitchStackRequest, config?: AxiosRequestConfig): Promise<operations.RemoveNetworkSwitchStackResponse>;
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
    /**
     * updateNetworkSwitchStackRoutingStaticRoute - Update a layer 3 static route for a switch stack
     *
     * Update a layer 3 static route for a switch stack
    **/
    updateNetworkSwitchStackRoutingStaticRoute(req: operations.UpdateNetworkSwitchStackRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchStackRoutingStaticRouteResponse>;
}
