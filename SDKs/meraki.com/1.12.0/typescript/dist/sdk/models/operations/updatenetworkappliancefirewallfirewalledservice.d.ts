import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceFirewallFirewalledServicePathParams extends SpeakeasyBase {
    networkId: string;
    service: string;
}
export declare enum UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum {
    Blocked = "blocked",
    Restricted = "restricted",
    Unrestricted = "unrestricted"
}
export declare class UpdateNetworkApplianceFirewallFirewalledServiceRequestBody extends SpeakeasyBase {
    access: UpdateNetworkApplianceFirewallFirewalledServiceRequestBodyAccessEnum;
    allowedIps?: string[];
}
export declare class UpdateNetworkApplianceFirewallFirewalledServiceRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceFirewallFirewalledServicePathParams;
    request: UpdateNetworkApplianceFirewallFirewalledServiceRequestBody;
}
export declare class UpdateNetworkApplianceFirewallFirewalledServiceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceFirewallFirewalledService200ApplicationJsonObject?: Map<string, any>;
}
