import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchAccessPolicyPathParams extends SpeakeasyBase {
    accessPolicyNumber: string;
    networkId: string;
}
export declare enum UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum {
    EightHundredAndTwo1x = "802.1x",
    MacAuthenticationBypass = "MAC authentication bypass",
    HybridAuthentication = "Hybrid authentication"
}
export declare enum UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum {
    SingleHost = "Single-Host",
    MultiDomain = "Multi-Domain",
    MultiHost = "Multi-Host",
    MultiAuth = "Multi-Auth"
}
/**
 * Critical auth settings for when authentication is rejected by the RADIUS server
**/
export declare class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth extends SpeakeasyBase {
    dataVlanId?: number;
    suspendPortBounce?: boolean;
    voiceVlanId?: number;
}
/**
 * Object for RADIUS Settings
**/
export declare class UpdateNetworkSwitchAccessPolicyRequestBodyRadius extends SpeakeasyBase {
    criticalAuth?: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
}
export declare class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers extends SpeakeasyBase {
    host: string;
    port: number;
    secret: string;
}
export declare class UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers extends SpeakeasyBase {
    host: string;
    port: number;
    secret: string;
}
export declare class UpdateNetworkSwitchAccessPolicyRequestBody extends SpeakeasyBase {
    accessPolicyType?: UpdateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
    guestVlanId?: number;
    hostMode?: UpdateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
    increaseAccessSpeed?: boolean;
    name?: string;
    radius?: UpdateNetworkSwitchAccessPolicyRequestBodyRadius;
    radiusAccountingEnabled?: boolean;
    radiusAccountingServers?: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[];
    radiusCoaSupportEnabled?: boolean;
    radiusGroupAttribute?: string;
    radiusServers?: UpdateNetworkSwitchAccessPolicyRequestBodyRadiusServers[];
    radiusTestingEnabled?: boolean;
    urlRedirectWalledGardenEnabled?: boolean;
    urlRedirectWalledGardenRanges?: string[];
    voiceVlanClients?: boolean;
}
export declare class UpdateNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchAccessPolicyPathParams;
    request?: UpdateNetworkSwitchAccessPolicyRequestBody;
}
export declare class UpdateNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchAccessPolicy200ApplicationJsonObject?: Map<string, any>;
}
