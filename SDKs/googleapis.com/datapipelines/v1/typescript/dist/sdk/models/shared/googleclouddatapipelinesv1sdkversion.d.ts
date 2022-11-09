import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum {
    Unknown = "UNKNOWN",
    Supported = "SUPPORTED",
    Stale = "STALE",
    Deprecated = "DEPRECATED",
    Unsupported = "UNSUPPORTED"
}
/**
 * The version of the SDK used to run the job.
**/
export declare class GoogleCloudDatapipelinesV1SdkVersion extends SpeakeasyBase {
    sdkSupportStatus?: GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum;
    version?: string;
    versionDisplayName?: string;
}
