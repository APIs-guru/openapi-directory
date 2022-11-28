import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1BrowserVersionChannelEnum {
    ReleaseChannelUnspecified = "RELEASE_CHANNEL_UNSPECIFIED",
    Canary = "CANARY",
    Dev = "DEV",
    Beta = "BETA",
    Stable = "STABLE"
}
export declare enum GoogleChromeManagementV1BrowserVersionSystemEnum {
    DeviceSystemUnspecified = "DEVICE_SYSTEM_UNSPECIFIED",
    SystemOther = "SYSTEM_OTHER",
    SystemAndroid = "SYSTEM_ANDROID",
    SystemIos = "SYSTEM_IOS",
    SystemCros = "SYSTEM_CROS",
    SystemWindows = "SYSTEM_WINDOWS",
    SystemMac = "SYSTEM_MAC",
    SystemLinux = "SYSTEM_LINUX"
}
/**
 * Describes a browser version and its install count.
**/
export declare class GoogleChromeManagementV1BrowserVersion extends SpeakeasyBase {
    channel?: GoogleChromeManagementV1BrowserVersionChannelEnum;
    count?: string;
    deviceOsVersion?: string;
    system?: GoogleChromeManagementV1BrowserVersionSystemEnum;
    version?: string;
}
