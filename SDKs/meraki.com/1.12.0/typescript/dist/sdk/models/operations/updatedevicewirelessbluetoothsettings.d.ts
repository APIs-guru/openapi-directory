import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceWirelessBluetoothSettingsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class UpdateDeviceWirelessBluetoothSettingsRequestBody extends SpeakeasyBase {
    major?: number;
    minor?: number;
    uuid?: string;
}
export declare class UpdateDeviceWirelessBluetoothSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceWirelessBluetoothSettingsPathParams;
    request?: UpdateDeviceWirelessBluetoothSettingsRequestBody;
}
export declare class UpdateDeviceWirelessBluetoothSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceWirelessBluetoothSettings200ApplicationJsonObject?: Map<string, any>;
}
