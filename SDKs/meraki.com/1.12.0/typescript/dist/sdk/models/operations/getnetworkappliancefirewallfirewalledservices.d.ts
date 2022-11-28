import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceFirewallFirewalledServicesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkApplianceFirewallFirewalledServicesRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceFirewallFirewalledServicesPathParams;
}
export declare class GetNetworkApplianceFirewallFirewalledServicesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceFirewallFirewalledServices200ApplicationJsonObject?: Map<string, any>;
}
