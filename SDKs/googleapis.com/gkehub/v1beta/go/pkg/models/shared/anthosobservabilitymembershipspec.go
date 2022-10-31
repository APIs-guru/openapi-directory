package shared

type AnthosObservabilityMembershipSpec struct {
	DoNotOptimizeMetrics            *bool   `json:"doNotOptimizeMetrics,omitempty"`
	EnableStackdriverOnApplications *bool   `json:"enableStackdriverOnApplications,omitempty"`
	Version                         *string `json:"version,omitempty"`
}
