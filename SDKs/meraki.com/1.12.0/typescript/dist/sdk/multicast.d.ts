import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Multicast {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createNetworkSwitchRoutingMulticastRendezvousPoint - Create a multicast rendezvous point
     *
     * Create a multicast rendezvous point
    **/
    createNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.CreateNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.CreateNetworkSwitchRoutingMulticastRendezvousPointResponse>;
    /**
     * deleteNetworkSwitchRoutingMulticastRendezvousPoint - Delete a multicast rendezvous point
     *
     * Delete a multicast rendezvous point
    **/
    deleteNetworkSwitchRoutingMulticastRendezvousPoint(req: operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworkSwitchRoutingMulticastRendezvousPointResponse>;
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
}
