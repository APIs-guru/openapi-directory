package shared

type DistributionCut struct {
	DistributionFilter *string                  `json:"distributionFilter"`
	Range              *GoogleMonitoringV3Range `json:"range"`
}
