import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchAccessPolicyPathParams extends SpeakeasyBase {
    accessPolicyNumber: string;
    networkId: string;
}
export declare class GetNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchAccessPolicyPathParams;
}
export declare class GetNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchAccessPolicy200ApplicationJsonObject?: Map<string, any>;
}
