import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchDhcpServerPolicyPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum {
    Allow = "allow",
    Block = "block"
}
export declare class UpdateNetworkSwitchDhcpServerPolicyRequestBody extends SpeakeasyBase {
    allowedServers?: string[];
    blockedServers?: string[];
    defaultPolicy?: UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum;
}
export declare class UpdateNetworkSwitchDhcpServerPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchDhcpServerPolicyPathParams;
    request?: UpdateNetworkSwitchDhcpServerPolicyRequestBody;
}
export declare class UpdateNetworkSwitchDhcpServerPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchDhcpServerPolicy200ApplicationJsonObject?: Map<string, any>;
}
