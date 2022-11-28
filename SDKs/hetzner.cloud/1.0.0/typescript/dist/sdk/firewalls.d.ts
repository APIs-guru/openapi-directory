import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Firewalls {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteFirewallsId - Delete a Firewall
     *
     * Deletes a Firewall.
     *
     * #### Call specific error codes
     *
     * | Code              | Description                               |
     * |-------------------|-------------------------------------------|
     * | `resource_in_use` | Firewall must not be in use to be deleted |
     *
    **/
    deleteFirewallsId(req: operations.DeleteFirewallsIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFirewallsIdResponse>;
    /**
     * getFirewalls - Get all Firewalls
     *
     * Returns all Firewall objects.
    **/
    getFirewalls(req: operations.GetFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallsResponse>;
    /**
     * getFirewallsId - Get a Firewall
     *
     * Gets a specific Firewall object.
    **/
    getFirewallsId(req: operations.GetFirewallsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallsIdResponse>;
    /**
     * postFirewalls - Create a Firewall
     *
     * Creates a new Firewall.
     *
     * #### Call specific error codes
     *
     * | Code                        | Description                                             |
     * |-----------------------------|---------------------------------------------------------|
     * | `server_already_added`      | Server added more than one time to resource             |
     * | `incompatible_network_type` | The Network type is incompatible for the given resource |
     *
    **/
    postFirewalls(req: operations.PostFirewallsRequest, config?: AxiosRequestConfig): Promise<operations.PostFirewallsResponse>;
    /**
     * putFirewallsId - Update a Firewall
     *
     * Updates the Firewall.
     *
     * Note that when updating labels, the Firewall's current set of labels will be replaced with the labels provided in the request body. So, for example, if you want to add a new label, you have to provide all existing labels plus the new label in the request body.
     *
     * Note: if the Firewall object changes during the request, the response will be a “conflict” error.
     *
    **/
    putFirewallsId(req: operations.PutFirewallsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutFirewallsIdResponse>;
}
