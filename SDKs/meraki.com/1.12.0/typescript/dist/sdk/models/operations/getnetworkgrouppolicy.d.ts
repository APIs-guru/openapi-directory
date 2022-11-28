import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkGroupPolicyPathParams extends SpeakeasyBase {
    groupPolicyId: string;
    networkId: string;
}
export declare class GetNetworkGroupPolicyRequest extends SpeakeasyBase {
    pathParams: GetNetworkGroupPolicyPathParams;
}
export declare class GetNetworkGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkGroupPolicy200ApplicationJsonObject?: Map<string, any>;
}
