import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkGroupPoliciesPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkGroupPoliciesRequest extends SpeakeasyBase {
    pathParams: GetNetworkGroupPoliciesPathParams;
}
export declare class GetNetworkGroupPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkGroupPolicies200ApplicationJsonObject?: Map<string, any>;
}
