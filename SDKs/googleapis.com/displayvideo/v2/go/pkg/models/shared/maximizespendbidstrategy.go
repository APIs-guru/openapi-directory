package shared

type MaximizeSpendBidStrategyPerformanceGoalTypeEnum string

const (
	MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeUnspecified MaximizeSpendBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED"
	MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCpa         MaximizeSpendBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA"
	MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCpc         MaximizeSpendBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC"
	MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeViewableCpm MaximizeSpendBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM"
	MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCustomAlgo  MaximizeSpendBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO"
	MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCiva        MaximizeSpendBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA"
	MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeIvoTen      MaximizeSpendBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN"
	MaximizeSpendBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeAvViewed    MaximizeSpendBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED"
)

// MaximizeSpendBidStrategy
// A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget.
type MaximizeSpendBidStrategy struct {
	CustomBiddingAlgorithmID     *string                                          `json:"customBiddingAlgorithmId,omitempty"`
	MaxAverageCpmBidAmountMicros *string                                          `json:"maxAverageCpmBidAmountMicros,omitempty"`
	PerformanceGoalType          *MaximizeSpendBidStrategyPerformanceGoalTypeEnum `json:"performanceGoalType,omitempty"`
	RaiseBidForDeals             *bool                                            `json:"raiseBidForDeals,omitempty"`
}
