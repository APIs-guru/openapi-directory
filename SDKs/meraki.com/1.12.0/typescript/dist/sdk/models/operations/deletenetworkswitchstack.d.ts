import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteNetworkSwitchStackPathParams extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare class DeleteNetworkSwitchStackRequest extends SpeakeasyBase {
    pathParams: DeleteNetworkSwitchStackPathParams;
}
export declare class DeleteNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
