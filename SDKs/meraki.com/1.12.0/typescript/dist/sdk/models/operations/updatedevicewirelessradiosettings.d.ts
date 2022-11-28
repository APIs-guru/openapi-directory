import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceWirelessRadioSettingsPathParams extends SpeakeasyBase {
    serial: string;
}
/**
 * Manual radio settings for 5 GHz.
**/
export declare class UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings extends SpeakeasyBase {
    channel?: number;
    channelWidth?: number;
    targetPower?: number;
}
/**
 * Manual radio settings for 2.4 GHz.
**/
export declare class UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings extends SpeakeasyBase {
    channel?: number;
    targetPower?: number;
}
export declare class UpdateDeviceWirelessRadioSettingsRequestBody extends SpeakeasyBase {
    fiveGhzSettings?: UpdateDeviceWirelessRadioSettingsRequestBodyFiveGhzSettings;
    rfProfileId?: number;
    twoFourGhzSettings?: UpdateDeviceWirelessRadioSettingsRequestBodyTwoFourGhzSettings;
}
export declare class UpdateDeviceWirelessRadioSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceWirelessRadioSettingsPathParams;
    request?: UpdateDeviceWirelessRadioSettingsRequestBody;
}
export declare class UpdateDeviceWirelessRadioSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceWirelessRadioSettings200ApplicationJsonObject?: Map<string, any>;
}
