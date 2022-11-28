import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleChromeManagementV1HttpsLatencyRoutineDataProblemEnum {
    HttpsLatencyProblemUnspecified = "HTTPS_LATENCY_PROBLEM_UNSPECIFIED",
    FailedDnsResolutions = "FAILED_DNS_RESOLUTIONS",
    FailedHttpsRequests = "FAILED_HTTPS_REQUESTS",
    HighLatency = "HIGH_LATENCY",
    VeryHighLatency = "VERY_HIGH_LATENCY"
}


// GoogleChromeManagementV1HttpsLatencyRoutineData
/** 
 * Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
**/
export class GoogleChromeManagementV1HttpsLatencyRoutineData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: string;

  @SpeakeasyMetadata({ data: "json, name=problem" })
  problem?: GoogleChromeManagementV1HttpsLatencyRoutineDataProblemEnum;
}
