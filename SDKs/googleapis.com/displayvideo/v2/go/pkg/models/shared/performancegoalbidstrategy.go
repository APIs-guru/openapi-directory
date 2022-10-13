package shared

type PerformanceGoalBidStrategyPerformanceGoalTypeEnum string

const (
	PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeUnspecified PerformanceGoalBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED"
	PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCpa         PerformanceGoalBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA"
	PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCpc         PerformanceGoalBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC"
	PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeViewableCpm PerformanceGoalBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM"
	PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCustomAlgo  PerformanceGoalBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO"
	PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeCiva        PerformanceGoalBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA"
	PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeIvoTen      PerformanceGoalBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN"
	PerformanceGoalBidStrategyPerformanceGoalTypeEnumBiddingStrategyPerformanceGoalTypeAvViewed    PerformanceGoalBidStrategyPerformanceGoalTypeEnum = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED"
)

type PerformanceGoalBidStrategy struct {
	CustomBiddingAlgorithmID     *string                                            `json:"customBiddingAlgorithmId"`
	MaxAverageCpmBidAmountMicros *string                                            `json:"maxAverageCpmBidAmountMicros"`
	PerformanceGoalAmountMicros  *string                                            `json:"performanceGoalAmountMicros"`
	PerformanceGoalType          *PerformanceGoalBidStrategyPerformanceGoalTypeEnum `json:"performanceGoalType"`
}
