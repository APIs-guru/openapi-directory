package shared

type DistributionCut struct {
	DistributionFilter *string                  `json:"distributionFilter,omitempty"`
	Range              *GoogleMonitoringV3Range `json:"range,omitempty"`
}
