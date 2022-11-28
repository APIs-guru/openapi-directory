import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchDhcpServerPolicyPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchDhcpServerPolicyRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchDhcpServerPolicyPathParams;
}
export declare class GetNetworkSwitchDhcpServerPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchDhcpServerPolicy200ApplicationJsonObject?: Map<string, any>;
}
