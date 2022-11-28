import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkSwitchAccessPolicyPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum {
    EightHundredAndTwo1x = "802.1x",
    MacAuthenticationBypass = "MAC authentication bypass",
    HybridAuthentication = "Hybrid authentication"
}
export declare enum CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum {
    SingleHost = "Single-Host",
    MultiDomain = "Multi-Domain",
    MultiHost = "Multi-Host",
    MultiAuth = "Multi-Auth"
}
/**
 * Critical auth settings for when authentication is rejected by the RADIUS server
**/
export declare class CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth extends SpeakeasyBase {
    dataVlanId?: number;
    suspendPortBounce?: boolean;
    voiceVlanId?: number;
}
/**
 * Object for RADIUS Settings
**/
export declare class CreateNetworkSwitchAccessPolicyRequestBodyRadius extends SpeakeasyBase {
    criticalAuth?: CreateNetworkSwitchAccessPolicyRequestBodyRadiusCriticalAuth;
}
export declare class CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers extends SpeakeasyBase {
    host: string;
    port: number;
    secret: string;
}
export declare class CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers extends SpeakeasyBase {
    host: string;
    port: number;
    secret: string;
}
export declare class CreateNetworkSwitchAccessPolicyRequestBody extends SpeakeasyBase {
    accessPolicyType?: CreateNetworkSwitchAccessPolicyRequestBodyAccessPolicyTypeEnum;
    guestVlanId?: number;
    hostMode: CreateNetworkSwitchAccessPolicyRequestBodyHostModeEnum;
    increaseAccessSpeed?: boolean;
    name: string;
    radius?: CreateNetworkSwitchAccessPolicyRequestBodyRadius;
    radiusAccountingEnabled: boolean;
    radiusAccountingServers?: CreateNetworkSwitchAccessPolicyRequestBodyRadiusAccountingServers[];
    radiusCoaSupportEnabled: boolean;
    radiusGroupAttribute?: string;
    radiusServers: CreateNetworkSwitchAccessPolicyRequestBodyRadiusServers[];
    radiusTestingEnabled: boolean;
    urlRedirectWalledGardenEnabled: boolean;
    urlRedirectWalledGardenRanges?: string[];
    voiceVlanClients?: boolean;
}
export declare class CreateNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
    pathParams: CreateNetworkSwitchAccessPolicyPathParams;
    request: CreateNetworkSwitchAccessPolicyRequestBody;
}
export declare class CreateNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkSwitchAccessPolicy201ApplicationJsonObject?: Map<string, any>;
}
