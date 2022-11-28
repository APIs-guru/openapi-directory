import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomVoiceParamsReportedUsageEnum {
    ReportedUsageUnspecified = "REPORTED_USAGE_UNSPECIFIED",
    Realtime = "REALTIME",
    Offline = "OFFLINE"
}


// CustomVoiceParams
/** 
 * Description of the custom voice to be synthesized.
**/
export class CustomVoiceParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=reportedUsage" })
  reportedUsage?: CustomVoiceParamsReportedUsageEnum;
}
