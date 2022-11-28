import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchStackPathParams extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare class GetNetworkSwitchStackRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchStackPathParams;
}
export declare class GetNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchStack200ApplicationJsonObject?: Map<string, any>;
}
