package shared

// RequestBasedSli
// Service Level Indicators for which atomic units of service are counted directly.
type RequestBasedSli struct {
	DistributionCut *DistributionCut `json:"distributionCut,omitempty"`
	GoodTotalRatio  *TimeSeriesRatio `json:"goodTotalRatio,omitempty"`
}
