import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FixedBidStrategy } from "./fixedbidstrategy";
import { MaximizeSpendBidStrategy } from "./maximizespendbidstrategy";
import { PerformanceGoalBidStrategy } from "./performancegoalbidstrategy";


// BiddingStrategy
/** 
 * Settings that control the bid strategy. Bid strategy determines the bid price.
**/
export class BiddingStrategy extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedBid" })
  fixedBid?: FixedBidStrategy;

  @Metadata({ data: "json, name=maximizeSpendAutoBid" })
  maximizeSpendAutoBid?: MaximizeSpendBidStrategy;

  @Metadata({ data: "json, name=performanceGoalAutoBid" })
  performanceGoalAutoBid?: PerformanceGoalBidStrategy;
}
