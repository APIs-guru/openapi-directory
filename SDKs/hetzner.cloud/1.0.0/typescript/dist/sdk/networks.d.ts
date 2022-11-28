import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Networks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteNetworksId - Delete a Network
     *
     * Deletes a network. If there are Servers attached they will be detached in the background.
     *
     * Note: if the network object changes during the request, the response will be a “conflict” error.
     *
    **/
    deleteNetworksId(req: operations.DeleteNetworksIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteNetworksIdResponse>;
    /**
     * getNetworks - Get all Networks
     *
     * Gets all existing networks that you have available.
    **/
    getNetworks(req: operations.GetNetworksRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworksResponse>;
    /**
     * getNetworksId - Get a Network
     *
     * Gets a specific network object.
    **/
    getNetworksId(req: operations.GetNetworksIdRequest, config?: AxiosRequestConfig): Promise<operations.GetNetworksIdResponse>;
    /**
     * postNetworks - Create a Network
     *
     * Creates a network with the specified `ip_range`.
     *
     * You may specify one or more `subnets`. You can also add more Subnets later by using the [add subnet action](https://docs.hetzner.cloud/#network-actions-add-a-subnet-to-a-network). If you do not specify an `ip_range` in the subnet we will automatically pick the first available /24 range for you.
     *
     * You may specify one or more routes in `routes`. You can also add more routes later by using the [add route action](https://docs.hetzner.cloud/#network-actions-add-a-route-to-a-network).
     *
    **/
    postNetworks(req: operations.PostNetworksRequest, config?: AxiosRequestConfig): Promise<operations.PostNetworksResponse>;
    /**
     * putNetworksId - Update a Network
     *
     * Updates the network properties.
     *
     * Note that when updating labels, the network’s current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
     * Note: if the network object changes during the request, the response will be a “conflict” error.
     *
    **/
    putNetworksId(req: operations.PutNetworksIdRequest, config?: AxiosRequestConfig): Promise<operations.PutNetworksIdResponse>;
}
