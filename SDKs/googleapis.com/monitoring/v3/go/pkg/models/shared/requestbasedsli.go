package shared

type RequestBasedSli struct {
	DistributionCut *DistributionCut `json:"distributionCut"`
	GoodTotalRatio  *TimeSeriesRatio `json:"goodTotalRatio"`
}
