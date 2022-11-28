package shared

type ScanRunWarningTraceCodeEnum string

const (
	ScanRunWarningTraceCodeEnumCodeUnspecified                  ScanRunWarningTraceCodeEnum = "CODE_UNSPECIFIED"
	ScanRunWarningTraceCodeEnumInsufficientCrawlResults         ScanRunWarningTraceCodeEnum = "INSUFFICIENT_CRAWL_RESULTS"
	ScanRunWarningTraceCodeEnumTooManyCrawlResults              ScanRunWarningTraceCodeEnum = "TOO_MANY_CRAWL_RESULTS"
	ScanRunWarningTraceCodeEnumTooManyFuzzTasks                 ScanRunWarningTraceCodeEnum = "TOO_MANY_FUZZ_TASKS"
	ScanRunWarningTraceCodeEnumBlockedByIap                     ScanRunWarningTraceCodeEnum = "BLOCKED_BY_IAP"
	ScanRunWarningTraceCodeEnumNoStartingURLFoundForManagedScan ScanRunWarningTraceCodeEnum = "NO_STARTING_URL_FOUND_FOR_MANAGED_SCAN"
)

// ScanRunWarningTrace
// Output only. Defines a warning trace message for ScanRun. Warning traces provide customers with useful information that helps make the scanning process more effective.
type ScanRunWarningTrace struct {
	Code *ScanRunWarningTraceCodeEnum `json:"code,omitempty"`
}
