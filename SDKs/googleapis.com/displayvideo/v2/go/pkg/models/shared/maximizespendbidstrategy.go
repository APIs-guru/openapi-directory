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

type MaximizeSpendBidStrategy struct {
	CustomBiddingAlgorithmID     *string                                          `json:"customBiddingAlgorithmId"`
	MaxAverageCpmBidAmountMicros *string                                          `json:"maxAverageCpmBidAmountMicros"`
	PerformanceGoalType          *MaximizeSpendBidStrategyPerformanceGoalTypeEnum `json:"performanceGoalType"`
	RaiseBidForDeals             *bool                                            `json:"raiseBidForDeals"`
}
