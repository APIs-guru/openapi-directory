import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs extends SpeakeasyBase {
    hubId: string;
    useDefaultRoute?: boolean;
}
export declare enum UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum {
    None = "none",
    Spoke = "spoke",
    Hub = "hub"
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets extends SpeakeasyBase {
    localSubnet: string;
    useVpn?: boolean;
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody extends SpeakeasyBase {
    hubs?: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyHubs[];
    mode: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodyModeEnum;
    subnets?: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBodySubnets[];
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceVpnSiteToSiteVpnPathParams;
    request: UpdateNetworkApplianceVpnSiteToSiteVpnRequestBody;
}
export declare class UpdateNetworkApplianceVpnSiteToSiteVpnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceVpnSiteToSiteVpn200ApplicationJsonObject?: Map<string, any>;
}
