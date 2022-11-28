import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MobileAppDirectoryEnum {
    Unknown = "UNKNOWN",
    AppleAppStore = "APPLE_APP_STORE",
    GooglePlayStore = "GOOGLE_PLAY_STORE",
    RokuAppStore = "ROKU_APP_STORE",
    AmazonFiretvAppStore = "AMAZON_FIRETV_APP_STORE",
    PlaystationAppStore = "PLAYSTATION_APP_STORE",
    AppleTvAppStore = "APPLE_TV_APP_STORE",
    XboxAppStore = "XBOX_APP_STORE",
    SamsungTvAppStore = "SAMSUNG_TV_APP_STORE",
    AndroidTvAppStore = "ANDROID_TV_APP_STORE",
    GenericCtvAppStore = "GENERIC_CTV_APP_STORE"
}
/**
 * Contains information about a mobile app. Used as a landing page deep link.
**/
export declare class MobileApp extends SpeakeasyBase {
    directory?: MobileAppDirectoryEnum;
    id?: string;
    kind?: string;
    publisherName?: string;
    title?: string;
}
