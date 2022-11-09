import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleChromeManagementV1HttpsLatencyRoutineDataProblemEnum {
    HttpsLatencyProblemUnspecified = "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
,    FailedDnsResolutions = "FAILED_DNS_RESOLUTIONS"
,    FailedHttpsRequests = "FAILED_HTTPS_REQUESTS"
,    HighLatency = "HIGH_LATENCY"
,    VeryHighLatency = "VERY_HIGH_LATENCY"
}


// GoogleChromeManagementV1HttpsLatencyRoutineData
/** 
 * Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
**/
export class GoogleChromeManagementV1HttpsLatencyRoutineData extends SpeakeasyBase {
  @Metadata({ data: "json, name=latency" })
  latency?: string;

  @Metadata({ data: "json, name=problem" })
  problem?: GoogleChromeManagementV1HttpsLatencyRoutineDataProblemEnum;
}
