import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class FirewallActions {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getFirewallsIdActions - Get all Actions for a Firewall
     *
     * Returns all Action objects for a Firewall. You can sort the results by using the `sort` URI parameter, and filter them with the `status` parameter.
    **/
    getFirewallsIdActions(req: operations.GetFirewallsIdActionsRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallsIdActionsResponse>;
    /**
     * getFirewallsIdActionsActionId - Get an Action for a Firewall
     *
     * Returns a specific Action for a Firewall.
    **/
    getFirewallsIdActionsActionId(req: operations.GetFirewallsIdActionsActionIdRequest, config?: AxiosRequestConfig): Promise<operations.GetFirewallsIdActionsActionIdResponse>;
    /**
     * postFirewallsIdActionsApplyToResources - Apply to Resources
     *
     * Applies one Firewall to multiple resources.
     *
     * Currently servers (public network interface) and label selectors are supported.
     *
     * #### Call specific error codes
     *
     * | Code                        | Description                                             |
     * |-----------------------------|---------------------------------------------------------|
     * | `firewall_already_applied`  | Firewall was already applied on resource                |
     * | `incompatible_network_type` | The Network type is incompatible for the given resource |
     *
    **/
    postFirewallsIdActionsApplyToResources(req: operations.PostFirewallsIdActionsApplyToResourcesRequest, config?: AxiosRequestConfig): Promise<operations.PostFirewallsIdActionsApplyToResourcesResponse>;
    /**
     * postFirewallsIdActionsRemoveFromResources - Remove from Resources
     *
     * Removes one Firewall from multiple resources.
     *
     * Currently only Servers (and their public network interfaces) are supported.
     *
     * #### Call specific error codes
     *
     * | Code                       | Description                                    |
     * |----------------------------|------------------------------------------------|
     * | `firewall_already_removed` | Firewall was already removed from the resource |
     *
    **/
    postFirewallsIdActionsRemoveFromResources(req: operations.PostFirewallsIdActionsRemoveFromResourcesRequest, config?: AxiosRequestConfig): Promise<operations.PostFirewallsIdActionsRemoveFromResourcesResponse>;
    /**
     * postFirewallsIdActionsSetRules - Set Rules
     *
     * Sets the rules of a Firewall.
     *
     * All existing rules will be overwritten. Pass an empty `rules` array to remove all rules.
     *
    **/
    postFirewallsIdActionsSetRules(req: operations.PostFirewallsIdActionsSetRulesRequest, config?: AxiosRequestConfig): Promise<operations.PostFirewallsIdActionsSetRulesResponse>;
}
