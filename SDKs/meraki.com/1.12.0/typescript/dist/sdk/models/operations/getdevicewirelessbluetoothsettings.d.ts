import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceWirelessBluetoothSettingsRequest extends SpeakeasyBase {
    pathParams: GetDeviceWirelessBluetoothSettingsPathParams;
}
export declare class GetDeviceWirelessBluetoothSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
