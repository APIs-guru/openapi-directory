package shared

type AnthosObservabilityMembershipSpec struct {
	DoNotOptimizeMetrics            *bool   `json:"doNotOptimizeMetrics"`
	EnableStackdriverOnApplications *bool   `json:"enableStackdriverOnApplications"`
	Version                         *string `json:"version"`
}
