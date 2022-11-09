import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SdkVersionSdkSupportStatusEnum {
    Unknown = "UNKNOWN"
,    Supported = "SUPPORTED"
,    Stale = "STALE"
,    Deprecated = "DEPRECATED"
,    Unsupported = "UNSUPPORTED"
}


// SdkVersion
/** 
 * The version of the SDK used to run the job.
**/
export class SdkVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=sdkSupportStatus" })
  sdkSupportStatus?: SdkVersionSdkSupportStatusEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=versionDisplayName" })
  versionDisplayName?: string;
}
