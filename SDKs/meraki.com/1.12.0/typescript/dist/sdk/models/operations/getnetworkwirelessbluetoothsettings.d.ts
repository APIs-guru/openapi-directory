import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare class GetNetworkWirelessBluetoothSettingsRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessBluetoothSettingsPathParams;
}
export declare class GetNetworkWirelessBluetoothSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
