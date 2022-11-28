import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SDKVersionSDKSupportStatusEnum {
    Unknown = "UNKNOWN",
    Supported = "SUPPORTED",
    Stale = "STALE",
    Deprecated = "DEPRECATED",
    Unsupported = "UNSUPPORTED"
}


// SDKVersion
/** 
 * The version of the SDK used to run the job.
**/
export class SDKVersion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sdkSupportStatus" })
  sdkSupportStatus?: SDKVersionSDKSupportStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=versionDisplayName" })
  versionDisplayName?: string;
}
