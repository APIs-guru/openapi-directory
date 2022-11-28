import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepricingRuleCostOfGoodsSaleRule
/** 
 * A repricing rule that changes the sale price based on cost of goods sale.
**/
export class RepricingRuleCostOfGoodsSaleRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentageDelta" })
  percentageDelta?: number;

  @SpeakeasyMetadata({ data: "json, name=priceDelta" })
  priceDelta?: string;
}
