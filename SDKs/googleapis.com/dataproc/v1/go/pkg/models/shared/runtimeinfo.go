package shared

// RuntimeInfo
// Runtime information about workload execution.
type RuntimeInfo struct {
	ApproximateUsage    *UsageMetrics     `json:"approximateUsage,omitempty"`
	DiagnosticOutputURI *string           `json:"diagnosticOutputUri,omitempty"`
	Endpoints           map[string]string `json:"endpoints,omitempty"`
	OutputURI           *string           `json:"outputUri,omitempty"`
}

// RuntimeInfoInput
// Runtime information about workload execution.
type RuntimeInfoInput struct {
	ApproximateUsage *UsageMetrics `json:"approximateUsage,omitempty"`
}
