import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchAccessPoliciesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchAccessPoliciesRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchAccessPoliciesPathParams;
}
export declare class GetNetworkSwitchAccessPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchAccessPolicies200ApplicationJsonObject?: Map<string, any>;
}
