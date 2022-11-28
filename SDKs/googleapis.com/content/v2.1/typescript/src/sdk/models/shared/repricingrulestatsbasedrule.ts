import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepricingRuleStatsBasedRule
/** 
 * Definition of stats based rule.
**/
export class RepricingRuleStatsBasedRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=percentageDelta" })
  percentageDelta?: number;

  @SpeakeasyMetadata({ data: "json, name=priceDelta" })
  priceDelta?: string;
}
