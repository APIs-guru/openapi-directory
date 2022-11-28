import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FixedBidStrategy } from "./fixedbidstrategy";
import { MaximizeSpendBidStrategy } from "./maximizespendbidstrategy";
import { PerformanceGoalBidStrategy } from "./performancegoalbidstrategy";



// BiddingStrategy
/** 
 * Settings that control the bid strategy. Bid strategy determines the bid price.
**/
export class BiddingStrategy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedBid" })
  fixedBid?: FixedBidStrategy;

  @SpeakeasyMetadata({ data: "json, name=maximizeSpendAutoBid" })
  maximizeSpendAutoBid?: MaximizeSpendBidStrategy;

  @SpeakeasyMetadata({ data: "json, name=performanceGoalAutoBid" })
  performanceGoalAutoBid?: PerformanceGoalBidStrategy;
}
