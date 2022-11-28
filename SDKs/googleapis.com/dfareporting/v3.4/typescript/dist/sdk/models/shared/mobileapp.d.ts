import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MobileAppDirectoryEnum {
    Unknown = "UNKNOWN",
    AppleAppStore = "APPLE_APP_STORE",
    GooglePlayStore = "GOOGLE_PLAY_STORE"
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
