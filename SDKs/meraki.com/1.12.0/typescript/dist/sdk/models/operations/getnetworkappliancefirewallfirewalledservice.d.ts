import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkApplianceFirewallFirewalledServicePathParams extends SpeakeasyBase {
    networkId: string;
    service: string;
}
export declare class GetNetworkApplianceFirewallFirewalledServiceRequest extends SpeakeasyBase {
    pathParams: GetNetworkApplianceFirewallFirewalledServicePathParams;
}
export declare class GetNetworkApplianceFirewallFirewalledServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkApplianceFirewallFirewalledService200ApplicationJsonObject?: Map<string, any>;
}
