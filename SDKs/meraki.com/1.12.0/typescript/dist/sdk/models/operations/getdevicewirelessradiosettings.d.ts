import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceWirelessRadioSettingsPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceWirelessRadioSettingsRequest extends SpeakeasyBase {
    pathParams: GetDeviceWirelessRadioSettingsPathParams;
}
export declare class GetDeviceWirelessRadioSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceWirelessRadioSettings200ApplicationJsonObject?: Map<string, any>;
}
