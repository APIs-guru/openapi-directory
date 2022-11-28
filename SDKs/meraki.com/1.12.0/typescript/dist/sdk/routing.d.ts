import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Routing {
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
     * createDeviceSwitchRoutingStaticRoute - Create a layer 3 static route for a switch
     *
     * Create a layer 3 static route for a switch
    **/
    createDeviceSwitchRoutingStaticRoute(req: operations.CreateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * createNetworkSwitchRoutingMulticastRendezvousPoint - Create a multicast rendezvous point
     *
     * Create a multicast rendezvous point
    **/
    createNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
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
     * deleteDeviceSwitchRoutingInterface - Delete a layer 3 interface from the switch
     *
     * Delete a layer 3 interface from the switch
    **/
    deleteDeviceSwitchRoutingInterface(req: operations.DeleteDeviceSwitchRoutingInterfaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingInterfaceResponse>;
    /**
     * deleteDeviceSwitchRoutingStaticRoute - Delete a layer 3 static route for a switch
     *
     * Delete a layer 3 static route for a switch
    **/
    deleteDeviceSwitchRoutingStaticRoute(req: operations.DeleteDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * deleteNetworkSwitchRoutingMulticastRendezvousPoint - Delete a multicast rendezvous point
     *
     * Delete a multicast rendezvous point
    **/
    deleteNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse>;
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
     * getDeviceSwitchRoutingStaticRoute - Return a layer 3 static route for a switch
     *
     * Return a layer 3 static route for a switch
    **/
    getDeviceSwitchRoutingStaticRoute(req: operations.GetDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * getDeviceSwitchRoutingStaticRoutes - List layer 3 static routes for a switch
     *
     * List layer 3 static routes for a switch
    **/
    getDeviceSwitchRoutingStaticRoutes(req: operations.GetDeviceSwitchRoutingStaticRoutesRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceSwitchRoutingStaticRoutesResponse>;
    /**
     * getNetworkSwitchRoutingMulticast - Return multicast settings for a network
     *
     * Return multicast settings for a network
    **/
    getNetworkSwitchRoutingMulticast(req: operations.GetNetworkSwitchRoutingMulticastRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastResponse>;
    /**
     * getNetworkSwitchRoutingMulticastRendezvousPoint - Return a multicast rendezvous point
     *
     * Return a multicast rendezvous point
    **/
    getNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * getNetworkSwitchRoutingMulticastRendezvousPoints - List multicast rendezvous points
     *
     * List multicast rendezvous points
    **/
    getNetworkSwitchRoutingMulticastRendezvousPoints(req: operations.GetNetworkSwitchRoutingMulticastRendezvousPointsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingMulticastRendezvousPointsResponse>;
    /**
     * getNetworkSwitchRoutingOspf - Return layer 3 OSPF routing configuration
     *
     * Return layer 3 OSPF routing configuration
    **/
    getNetworkSwitchRoutingOspf(req: operations.GetNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworkSwitchRoutingOspfResponse>;
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
     * updateDeviceSwitchRoutingStaticRoute - Update a layer 3 static route for a switch
     *
     * Update a layer 3 static route for a switch
    **/
    updateDeviceSwitchRoutingStaticRoute(req: operations.UpdateDeviceSwitchRoutingStaticRouteRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceSwitchRoutingStaticRouteResponse>;
    /**
     * updateNetworkSwitchRoutingMulticast - Update multicast settings for a network
     *
     * Update multicast settings for a network
    **/
    updateNetworkSwitchRoutingMulticast(req: operations.UpdateNetworkSwitchRoutingMulticastRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingMulticastResponse>;
    /**
     * updateNetworkSwitchRoutingMulticastRendezvousPoint - Update a multicast rendezvous point
     *
     * Update a multicast rendezvous point
    **/
    updateNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * updateNetworkSwitchRoutingOspf - Update layer 3 OSPF routing configuration
     *
     * Update layer 3 OSPF routing configuration
    **/
    updateNetworkSwitchRoutingOspf(req: operations.UpdateNetworkSwitchRoutingOspfRequest, config?: AxiosRequestConfig): Promise<operations.UpdateNetworkSwitchRoutingOspfResponse>;
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
