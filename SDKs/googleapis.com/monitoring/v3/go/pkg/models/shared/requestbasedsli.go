package shared



type RequestBasedSli struct {
    DistributionCut *DistributionCut `json:"distributionCut,omitempty"`
    GoodTotalRatio *TimeSeriesRatio `json:"goodTotalRatio,omitempty"`
    
}

