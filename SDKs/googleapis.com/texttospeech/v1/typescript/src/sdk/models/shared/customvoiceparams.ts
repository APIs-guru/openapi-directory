import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CustomVoiceParamsReportedUsageEnum {
    ReportedUsageUnspecified = "REPORTED_USAGE_UNSPECIFIED"
,    Realtime = "REALTIME"
,    Offline = "OFFLINE"
}


// CustomVoiceParams
/** 
 * Description of the custom voice to be synthesized.
**/
export class CustomVoiceParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=reportedUsage" })
  reportedUsage?: CustomVoiceParamsReportedUsageEnum;
}
