import { SpeakeasyBase } from "../../../internal/utils";
export declare class RemoveNetworkSwitchStackPathParams extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare class RemoveNetworkSwitchStackRequestBody extends SpeakeasyBase {
    serial: string;
}
export declare class RemoveNetworkSwitchStackRequest extends SpeakeasyBase {
    pathParams: RemoveNetworkSwitchStackPathParams;
    request: RemoveNetworkSwitchStackRequestBody;
}
export declare class RemoveNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    removeNetworkSwitchStack200ApplicationJsonObject?: Map<string, any>;
}
