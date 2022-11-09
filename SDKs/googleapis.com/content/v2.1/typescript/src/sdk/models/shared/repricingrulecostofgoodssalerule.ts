import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepricingRuleCostOfGoodsSaleRule
/** 
 * A repricing rule that changes the sale price based on cost of goods sale.
**/
export class RepricingRuleCostOfGoodsSaleRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentageDelta" })
  percentageDelta?: number;

  @Metadata({ data: "json, name=priceDelta" })
  priceDelta?: string;
}
