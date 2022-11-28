import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeviceInfoDeviceTypeEnum {
    DeviceTypeUnspecified = "DEVICE_TYPE_UNSPECIFIED",
    Web = "WEB",
    MobileWeb = "MOBILE_WEB",
    Android = "ANDROID",
    Ios = "IOS",
    Bot = "BOT",
    Other = "OTHER"
}
/**
 * Device information collected from the job seeker, candidate, or other entity conducting the job search. Providing this information improves the quality of the search results across devices.
**/
export declare class DeviceInfo extends SpeakeasyBase {
    deviceType?: DeviceInfoDeviceTypeEnum;
    id?: string;
}
