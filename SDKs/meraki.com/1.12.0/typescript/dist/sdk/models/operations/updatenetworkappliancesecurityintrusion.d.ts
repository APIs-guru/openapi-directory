import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum {
    Connectivity = "connectivity",
    Balanced = "balanced",
    Security = "security"
}
export declare enum UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum {
    Prevention = "prevention",
    Detection = "detection",
    Disabled = "disabled"
}
/**
 * Set the included/excluded networks from the intrusion engine (optional - omitting will leave current config unchanged). This is available only in 'passthrough' mode
**/
export declare class UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks extends SpeakeasyBase {
    excludedCidr?: string[];
    includedCidr?: string[];
    useDefault?: boolean;
}
export declare class UpdateNetworkApplianceSecurityIntrusionRequestBody extends SpeakeasyBase {
    idsRulesets?: UpdateNetworkApplianceSecurityIntrusionRequestBodyIdsRulesetsEnum;
    mode?: UpdateNetworkApplianceSecurityIntrusionRequestBodyModeEnum;
    protectedNetworks?: UpdateNetworkApplianceSecurityIntrusionRequestBodyProtectedNetworks;
}
export declare class UpdateNetworkApplianceSecurityIntrusionRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkApplianceSecurityIntrusionPathParams;
    request?: UpdateNetworkApplianceSecurityIntrusionRequestBody;
}
export declare class UpdateNetworkApplianceSecurityIntrusionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}
