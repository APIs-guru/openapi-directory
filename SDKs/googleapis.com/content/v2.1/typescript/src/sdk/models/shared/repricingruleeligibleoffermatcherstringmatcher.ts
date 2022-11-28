import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepricingRuleEligibleOfferMatcherStringMatcher
/** 
 * Matcher by string attributes.
**/
export class RepricingRuleEligibleOfferMatcherStringMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=strAttributes" })
  strAttributes?: string[];
}
