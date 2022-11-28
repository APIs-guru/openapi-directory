import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PerformanceGoalBidStrategyPerformanceGoalTypeEnum {
    BiddingStrategyPerformanceGoalTypeUnspecified = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED",
    BiddingStrategyPerformanceGoalTypeCpa = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA",
    BiddingStrategyPerformanceGoalTypeCpc = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC",
    BiddingStrategyPerformanceGoalTypeViewableCpm = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM",
    BiddingStrategyPerformanceGoalTypeCustomAlgo = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO",
    BiddingStrategyPerformanceGoalTypeCiva = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA",
    BiddingStrategyPerformanceGoalTypeIvoTen = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN",
    BiddingStrategyPerformanceGoalTypeAvViewed = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED"
}
/**
 * A strategy that automatically adjusts the bid to meet or beat a specified performance goal.
**/
export declare class PerformanceGoalBidStrategy extends SpeakeasyBase {
    customBiddingAlgorithmId?: string;
    maxAverageCpmBidAmountMicros?: string;
    performanceGoalAmountMicros?: string;
    performanceGoalType?: PerformanceGoalBidStrategyPerformanceGoalTypeEnum;
}
