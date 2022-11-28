import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SDKVersionSDKSupportStatusEnum {
    Unknown = "UNKNOWN",
    Supported = "SUPPORTED",
    Stale = "STALE",
    Deprecated = "DEPRECATED",
    Unsupported = "UNSUPPORTED"
}
/**
 * The version of the SDK used to run the job.
**/
export declare class SDKVersion extends SpeakeasyBase {
    sdkSupportStatus?: SDKVersionSDKSupportStatusEnum;
    version?: string;
    versionDisplayName?: string;
}
