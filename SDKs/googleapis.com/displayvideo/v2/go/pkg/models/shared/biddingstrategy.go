package shared

type BiddingStrategy struct {
	FixedBid               *FixedBidStrategy           `json:"fixedBid"`
	MaximizeSpendAutoBid   *MaximizeSpendBidStrategy   `json:"maximizeSpendAutoBid"`
	PerformanceGoalAutoBid *PerformanceGoalBidStrategy `json:"performanceGoalAutoBid"`
}
