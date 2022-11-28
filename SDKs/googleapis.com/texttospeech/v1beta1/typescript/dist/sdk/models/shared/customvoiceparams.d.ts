import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CustomVoiceParamsReportedUsageEnum {
    ReportedUsageUnspecified = "REPORTED_USAGE_UNSPECIFIED",
    Realtime = "REALTIME",
    Offline = "OFFLINE"
}
/**
 * Description of the custom voice to be synthesized.
**/
export declare class CustomVoiceParams extends SpeakeasyBase {
    model?: string;
    reportedUsage?: CustomVoiceParamsReportedUsageEnum;
}
