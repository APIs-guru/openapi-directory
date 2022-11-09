import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AndroidAppStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Deleted = "DELETED"
}
/**
 * Details of a Firebase App for Android.
**/
export declare class AndroidApp extends SpeakeasyBase {
    apiKeyId?: string;
    appId?: string;
    displayName?: string;
    name?: string;
    packageName?: string;
    projectId?: string;
    sha1Hashes?: string[];
    sha256Hashes?: string[];
    state?: AndroidAppStateEnum;
}
