import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MobileAppPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Ios = "IOS",
    Android = "ANDROID"
}
/**
 * A mobile app promoted by a mobile app install line item.
**/
export declare class MobileAppInput extends SpeakeasyBase {
    appId?: string;
}
/**
 * A mobile app promoted by a mobile app install line item.
**/
export declare class MobileApp extends SpeakeasyBase {
    appId?: string;
    displayName?: string;
    platform?: MobileAppPlatformEnum;
    publisher?: string;
}
