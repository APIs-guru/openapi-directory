import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepricingRuleEffectiveTimeFixedTimePeriod
/** 
 * Definition of a fixed time period.
**/
export class RepricingRuleEffectiveTimeFixedTimePeriod extends SpeakeasyBase {
  @Metadata({ data: "json, name=endTime" })
  endTime?: string;

  @Metadata({ data: "json, name=startTime" })
  startTime?: string;
}
