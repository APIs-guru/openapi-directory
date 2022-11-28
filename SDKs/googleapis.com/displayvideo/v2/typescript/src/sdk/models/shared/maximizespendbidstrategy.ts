import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MaximizeSpendBidStrategyPerformanceGoalTypeEnum {
    BiddingStrategyPerformanceGoalTypeUnspecified = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_UNSPECIFIED",
    BiddingStrategyPerformanceGoalTypeCpa = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPA",
    BiddingStrategyPerformanceGoalTypeCpc = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CPC",
    BiddingStrategyPerformanceGoalTypeViewableCpm = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_VIEWABLE_CPM",
    BiddingStrategyPerformanceGoalTypeCustomAlgo = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CUSTOM_ALGO",
    BiddingStrategyPerformanceGoalTypeCiva = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_CIVA",
    BiddingStrategyPerformanceGoalTypeIvoTen = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_IVO_TEN",
    BiddingStrategyPerformanceGoalTypeAvViewed = "BIDDING_STRATEGY_PERFORMANCE_GOAL_TYPE_AV_VIEWED"
}


// MaximizeSpendBidStrategy
/** 
 * A strategy that automatically adjusts the bid to optimize a specified performance goal while spending the full budget.
**/
export class MaximizeSpendBidStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customBiddingAlgorithmId" })
  customBiddingAlgorithmId?: string;

  @SpeakeasyMetadata({ data: "json, name=maxAverageCpmBidAmountMicros" })
  maxAverageCpmBidAmountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=performanceGoalType" })
  performanceGoalType?: MaximizeSpendBidStrategyPerformanceGoalTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=raiseBidForDeals" })
  raiseBidForDeals?: boolean;
}
