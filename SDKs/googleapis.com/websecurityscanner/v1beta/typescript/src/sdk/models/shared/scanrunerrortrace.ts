import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ScanConfigError } from "./scanconfigerror";

export enum ScanRunErrorTraceCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    InternalError = "INTERNAL_ERROR"
,    ScanConfigIssue = "SCAN_CONFIG_ISSUE"
,    AuthenticationConfigIssue = "AUTHENTICATION_CONFIG_ISSUE"
,    TimedOutWhileScanning = "TIMED_OUT_WHILE_SCANNING"
,    TooManyRedirects = "TOO_MANY_REDIRECTS"
,    TooManyHttpErrors = "TOO_MANY_HTTP_ERRORS"
}


// ScanRunErrorTrace
/** 
 * Output only. Defines an error trace message for a ScanRun.
**/
export class ScanRunErrorTrace extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: ScanRunErrorTraceCodeEnum;

  @Metadata({ data: "json, name=mostCommonHttpErrorCode" })
  mostCommonHttpErrorCode?: number;

  @Metadata({ data: "json, name=scanConfigError" })
  scanConfigError?: ScanConfigError;
}
