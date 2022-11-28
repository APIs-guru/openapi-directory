import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessAlternateManagementInterfacePathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessAlternateManagementInterfaceRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessAlternateManagementInterfacePathParams;
}
export declare class GetNetworkWirelessAlternateManagementInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessAlternateManagementInterface200ApplicationJsonObject?: Map<string, any>;
}
