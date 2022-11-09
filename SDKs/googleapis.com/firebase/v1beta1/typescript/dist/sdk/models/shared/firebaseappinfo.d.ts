import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FirebaseAppInfoPlatformEnum {
    PlatformUnspecified = "PLATFORM_UNSPECIFIED",
    Ios = "IOS",
    Android = "ANDROID",
    Web = "WEB"
}
export declare enum FirebaseAppInfoStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}
/**
 * A high-level summary of an App.
**/
export declare class FirebaseAppInfo extends SpeakeasyBase {
    apiKeyId?: string;
    appId?: string;
    displayName?: string;
    name?: string;
    namespace?: string;
    platform?: FirebaseAppInfoPlatformEnum;
    state?: FirebaseAppInfoStateEnum;
}
