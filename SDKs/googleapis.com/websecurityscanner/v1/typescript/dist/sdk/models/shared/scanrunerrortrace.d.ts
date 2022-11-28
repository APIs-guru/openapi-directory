import { SpeakeasyBase } from "../../../internal/utils";
import { ScanConfigError } from "./scanconfigerror";
export declare enum ScanRunErrorTraceCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    InternalError = "INTERNAL_ERROR",
    ScanConfigIssue = "SCAN_CONFIG_ISSUE",
    AuthenticationConfigIssue = "AUTHENTICATION_CONFIG_ISSUE",
    TimedOutWhileScanning = "TIMED_OUT_WHILE_SCANNING",
    TooManyRedirects = "TOO_MANY_REDIRECTS",
    TooManyHttpErrors = "TOO_MANY_HTTP_ERRORS"
}
/**
 * Output only. Defines an error trace message for a ScanRun.
**/
export declare class ScanRunErrorTrace extends SpeakeasyBase {
    code?: ScanRunErrorTraceCodeEnum;
    mostCommonHttpErrorCode?: number;
    scanConfigError?: ScanConfigError;
}
