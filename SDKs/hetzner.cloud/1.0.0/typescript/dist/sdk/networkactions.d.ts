import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class NetworkActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getNetworksIdActions - Get all Actions for a Network
     *
     * Returns all Action objects for a Network. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
    **/
    getNetworksIdActions(req: operations.GetNetworksIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworksIdActionsResponse>;
    /**
     * getNetworksIdActionsActionId - Get an Action for a Network
     *
     * Returns a specific Action for a Network.
    **/
    getNetworksIdActionsActionId(req: operations.GetNetworksIdActionsActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworksIdActionsActionIdResponse>;
    /**
     * postNetworksIdActionsAddRoute - Add a route to a Network
     *
     * Adds a route entry to a Network.
     *
     * Note: if the Network object changes during the request, the response will be a “conflict” error.
     *
    **/
    postNetworksIdActionsAddRoute(req: operations.PostNetworksIdActionsAddRouteRequest, config?: AxiosRequestConfig): Promise<operations.PostNetworksIdActionsAddRouteResponse>;
    /**
     * postNetworksIdActionsAddSubnet - Add a subnet to a Network
     *
     * Adds a new subnet object to the Network. If you do not specify an `ip_range` for the subnet we will automatically pick the first available /24 range for you if possible.
     *
     * Note: if the parent Network object changes during the request, the response will be a “conflict” error.
     *
    **/
    postNetworksIdActionsAddSubnet(req: operations.PostNetworksIdActionsAddSubnetRequest, config?: AxiosRequestConfig): Promise<operations.PostNetworksIdActionsAddSubnetResponse>;
    /**
     * postNetworksIdActionsChangeIpRange - Change IP range of a Network
     *
     * Changes the IP range of a Network. IP ranges can only be extended and never shrunk. You can only add IPs at the end of an existing IP range. This means that the IP part of your existing range must stay the same and you can only change its netmask.
     *
     * For example if you have a range `10.0.0.0/16` you want to extend then your new range must also start with the IP `10.0.0.0`. Your CIDR netmask `/16` may change to a number that is smaller than `16` thereby increasing the IP range. So valid entries would be `10.0.0.0/15`, `10.0.0.0/14`, `10.0.0.0/13` and so on.
     *
     * After changing the IP range you will have to adjust the routes on your connected Servers by either rebooting them or manually changing the routes to your private Network interface.
     *
     * Note: if the Network object changes during the request, the response will be a “conflict” error.
     *
    **/
    postNetworksIdActionsChangeIpRange(req: operations.PostNetworksIdActionsChangeIpRangeRequest, config?: AxiosRequestConfig): Promise<operations.PostNetworksIdActionsChangeIpRangeResponse>;
    /**
     * postNetworksIdActionsChangeProtection - Change Network Protection
     *
     * Changes the protection configuration of a Network.
     *
     * Note: if the Network object changes during the request, the response will be a “conflict” error.
     *
    **/
    postNetworksIdActionsChangeProtection(req: operations.PostNetworksIdActionsChangeProtectionRequest, config?: AxiosRequestConfig): Promise<operations.PostNetworksIdActionsChangeProtectionResponse>;
    /**
     * postNetworksIdActionsDeleteRoute - Delete a route from a Network
     *
     * Delete a route entry from a Network.
     *
     * Note: if the Network object changes during the request, the response will be a “conflict” error.
     *
    **/
    postNetworksIdActionsDeleteRoute(req: operations.PostNetworksIdActionsDeleteRouteRequest, config?: AxiosRequestConfig): Promise<operations.PostNetworksIdActionsDeleteRouteResponse>;
    /**
     * postNetworksIdActionsDeleteSubnet - Delete a subnet from a Network
     *
     * Deletes a single subnet entry from a Network. You cannot delete subnets which still have Servers attached. If you have Servers attached you first need to detach all Servers that use IPs from this subnet before you can delete the subnet.
     *
     * Note: if the Network object changes during the request, the response will be a “conflict” error.
     *
    **/
    postNetworksIdActionsDeleteSubnet(req: operations.PostNetworksIdActionsDeleteSubnetRequest, config?: AxiosRequestConfig): Promise<operations.PostNetworksIdActionsDeleteSubnetResponse>;
}
