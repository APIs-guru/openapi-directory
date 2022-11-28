import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleRestrictionBoundary } from "./repricingrulerestrictionboundary";



// RepricingRuleRestriction
/** 
 * Definition of a rule restriction. At least one of the following needs to be true: (1) use_auto_pricing_min_price is true (2) floor.price_delta exists (3) floor.percentage_delta exists If floor.price_delta and floor.percentage_delta are both set on a rule, the highest value will be chosen by the Repricer. In other words, for a product with a price of $50, if the `floor.percentage_delta` is "-10" and the floor.price_delta is "-12", the offer price will only be lowered $5 (10% lower than the original offer price).
**/
export class RepricingRuleRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=floor" })
  floor?: RepricingRuleRestrictionBoundary;

  @SpeakeasyMetadata({ data: "json, name=useAutoPricingMinPrice" })
  useAutoPricingMinPrice?: boolean;
}
