package shared

type BiddingStrategy struct {
	FixedBid               *FixedBidStrategy           `json:"fixedBid,omitempty"`
	MaximizeSpendAutoBid   *MaximizeSpendBidStrategy   `json:"maximizeSpendAutoBid,omitempty"`
	PerformanceGoalAutoBid *PerformanceGoalBidStrategy `json:"performanceGoalAutoBid,omitempty"`
}
