import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleMapsUnityClientInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Editor = "EDITOR",
    MacOs = "MAC_OS",
    Windows = "WINDOWS",
    Linux = "LINUX",
    Android = "ANDROID",
    Ios = "IOS",
    WebGl = "WEB_GL"
}
/**
 * Client information.
**/
export declare class GoogleMapsUnityClientInfo extends SpeakeasyBase {
    apiClient?: string;
    applicationId?: string;
    applicationVersion?: string;
    deviceModel?: string;
    languageCode?: string;
    operatingSystem?: string;
    operatingSystemBuild?: string;
    platform?: GoogleMapsUnityClientInfoPlatformEnum;
}
