import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkSwitchAccessPolicyPathParams extends SpeakeasyBase {
    accessPolicyNumber: string;
    networkId: string;
}
export declare class DeleteNetworkSwitchAccessPolicyRequest extends SpeakeasyBase {
    pathParams: DeleteNetworkSwitchAccessPolicyPathParams;
}
export declare class DeleteNetworkSwitchAccessPolicyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
