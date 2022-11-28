package shared

// BiddingStrategy
// Settings that control the bid strategy. Bid strategy determines the bid price.
type BiddingStrategy struct {
	FixedBid               *FixedBidStrategy           `json:"fixedBid,omitempty"`
	MaximizeSpendAutoBid   *MaximizeSpendBidStrategy   `json:"maximizeSpendAutoBid,omitempty"`
	PerformanceGoalAutoBid *PerformanceGoalBidStrategy `json:"performanceGoalAutoBid,omitempty"`
}
