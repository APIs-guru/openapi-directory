import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepricingRuleStatsBasedRule
/** 
 * Definition of stats based rule.
**/
export class RepricingRuleStatsBasedRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=percentageDelta" })
  percentageDelta?: number;

  @Metadata({ data: "json, name=priceDelta" })
  priceDelta?: string;
}
