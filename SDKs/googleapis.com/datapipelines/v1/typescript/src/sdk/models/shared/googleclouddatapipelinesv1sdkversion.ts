import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum {
    Unknown = "UNKNOWN"
,    Supported = "SUPPORTED"
,    Stale = "STALE"
,    Deprecated = "DEPRECATED"
,    Unsupported = "UNSUPPORTED"
}


// GoogleCloudDatapipelinesV1SdkVersion
/** 
 * The version of the SDK used to run the job.
**/
export class GoogleCloudDatapipelinesV1SdkVersion extends SpeakeasyBase {
  @Metadata({ data: "json, name=sdkSupportStatus" })
  sdkSupportStatus?: GoogleCloudDatapipelinesV1SdkVersionSdkSupportStatusEnum;

  @Metadata({ data: "json, name=version" })
  version?: string;

  @Metadata({ data: "json, name=versionDisplayName" })
  versionDisplayName?: string;
}
