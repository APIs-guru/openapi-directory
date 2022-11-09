import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Signals associated with the device making the request.
**/
export declare class DeviceInfo extends SpeakeasyBase {
    deviceModelName?: string;
    languageCode?: string;
    languageCodeFromWebview?: string;
    languageCodeRaw?: string;
    screenResolutionHeight?: string;
    screenResolutionWidth?: string;
    timezone?: string;
}
