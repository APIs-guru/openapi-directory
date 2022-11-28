import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ThirdPartyVpnPeers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getOrganizationApplianceVpnThirdPartyVpnPeers - Return the third party VPN peers for an organization
     *
     * Return the third party VPN peers for an organization
    **/
    getOrganizationApplianceVpnThirdPartyVpnPeers(req: operations.GetOrganizationApplianceVpnThirdPartyVpnPeersRequest, config?: AxiosRequestConfig): Promise<operations.GetOrganizationApplianceVpnThirdPartyVpnPeersResponse>;
    /**
     * updateOrganizationApplianceVpnThirdPartyVpnPeers - Update the third party VPN peers for an organization
     *
     * Update the third party VPN peers for an organization
    **/
    updateOrganizationApplianceVpnThirdPartyVpnPeers(req: operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOrganizationApplianceVpnThirdPartyVpnPeersResponse>;
}
