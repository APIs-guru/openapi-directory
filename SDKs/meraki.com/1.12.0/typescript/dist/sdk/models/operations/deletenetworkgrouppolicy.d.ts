import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkGroupPolicyPathParams extends SpeakeasyBase {
    groupPolicyId: string;
    networkId: string;
}
export declare class DeleteNetworkGroupPolicyRequest extends SpeakeasyBase {
    pathParams: DeleteNetworkGroupPolicyPathParams;
}
export declare class DeleteNetworkGroupPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
