import { SpeakeasyBase } from "../../../internal/utils";
export declare class AddNetworkSwitchStackPathParams extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare class AddNetworkSwitchStackRequestBody extends SpeakeasyBase {
    serial: string;
}
export declare class AddNetworkSwitchStackRequest extends SpeakeasyBase {
    pathParams: AddNetworkSwitchStackPathParams;
    request: AddNetworkSwitchStackRequestBody;
}
export declare class AddNetworkSwitchStackResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    addNetworkSwitchStack200ApplicationJsonObject?: Map<string, any>;
}
