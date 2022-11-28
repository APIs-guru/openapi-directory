import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkSwitchAlternateManagementInterfacePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkSwitchAlternateManagementInterfaceRequest extends SpeakeasyBase {
    pathParams: GetNetworkSwitchAlternateManagementInterfacePathParams;
}
export declare class GetNetworkSwitchAlternateManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkSwitchAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
