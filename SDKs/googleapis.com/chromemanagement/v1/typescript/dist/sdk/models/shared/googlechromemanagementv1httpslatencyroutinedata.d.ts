import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleChromeManagementV1HttpsLatencyRoutineDataProblemEnum {
    HttpsLatencyProblemUnspecified = "HTTPS_LATENCY_PROBLEM_UNSPECIFIED",
    FailedDnsResolutions = "FAILED_DNS_RESOLUTIONS",
    FailedHttpsRequests = "FAILED_HTTPS_REQUESTS",
    HighLatency = "HIGH_LATENCY",
    VeryHighLatency = "VERY_HIGH_LATENCY"
}
/**
 * Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
**/
export declare class GoogleChromeManagementV1HttpsLatencyRoutineData extends SpeakeasyBase {
    latency?: string;
    problem?: GoogleChromeManagementV1HttpsLatencyRoutineDataProblemEnum;
}
