package shared

type GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum string

const (
	GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnumHTTPSLatencyProblemUnspecified GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum = "HTTPS_LATENCY_PROBLEM_UNSPECIFIED"
	GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnumFailedDNSResolutions           GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum = "FAILED_DNS_RESOLUTIONS"
	GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnumFailedHTTPSRequests            GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum = "FAILED_HTTPS_REQUESTS"
	GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnumHighLatency                    GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum = "HIGH_LATENCY"
	GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnumVeryHighLatency                GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum = "VERY_HIGH_LATENCY"
)

// GoogleChromeManagementV1HTTPSLatencyRoutineData
// Data that describes the result of the HTTPS latency diagnostics routine, with the HTTPS requests issued to Google websites.
type GoogleChromeManagementV1HTTPSLatencyRoutineData struct {
	Latency *string                                                     `json:"latency,omitempty"`
	Problem *GoogleChromeManagementV1HTTPSLatencyRoutineDataProblemEnum `json:"problem,omitempty"`
}
