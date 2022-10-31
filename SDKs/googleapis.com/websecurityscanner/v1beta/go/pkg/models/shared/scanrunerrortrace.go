package shared




type ScanRunErrorTraceCodeEnum string

const (
    ScanRunErrorTraceCodeEnumCodeUnspecified ScanRunErrorTraceCodeEnum = "CODE_UNSPECIFIED"
ScanRunErrorTraceCodeEnumInternalError ScanRunErrorTraceCodeEnum = "INTERNAL_ERROR"
ScanRunErrorTraceCodeEnumScanConfigIssue ScanRunErrorTraceCodeEnum = "SCAN_CONFIG_ISSUE"
ScanRunErrorTraceCodeEnumAuthenticationConfigIssue ScanRunErrorTraceCodeEnum = "AUTHENTICATION_CONFIG_ISSUE"
ScanRunErrorTraceCodeEnumTimedOutWhileScanning ScanRunErrorTraceCodeEnum = "TIMED_OUT_WHILE_SCANNING"
ScanRunErrorTraceCodeEnumTooManyRedirects ScanRunErrorTraceCodeEnum = "TOO_MANY_REDIRECTS"
ScanRunErrorTraceCodeEnumTooManyHTTPErrors ScanRunErrorTraceCodeEnum = "TOO_MANY_HTTP_ERRORS"
)


type ScanRunErrorTrace struct {
    Code *ScanRunErrorTraceCodeEnum `json:"code,omitempty"`
    MostCommonHTTPErrorCode *int32 `json:"mostCommonHttpErrorCode,omitempty"`
    ScanConfigError *ScanConfigError `json:"scanConfigError,omitempty"`
    
}

