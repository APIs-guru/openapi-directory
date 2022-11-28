import { SpeakeasyBase } from "../../../internal/utils";
import { FixedBidStrategy } from "./fixedbidstrategy";
import { MaximizeSpendBidStrategy } from "./maximizespendbidstrategy";
import { PerformanceGoalBidStrategy } from "./performancegoalbidstrategy";
/**
 * Settings that control the bid strategy. Bid strategy determines the bid price.
**/
export declare class BiddingStrategy extends SpeakeasyBase {
    fixedBid?: FixedBidStrategy;
    maximizeSpendAutoBid?: MaximizeSpendBidStrategy;
    performanceGoalAutoBid?: PerformanceGoalBidStrategy;
}
