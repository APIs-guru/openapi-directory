import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepricingRuleEffectiveTimeFixedTimePeriod
/** 
 * Definition of a fixed time period.
**/
export class RepricingRuleEffectiveTimeFixedTimePeriod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endTime" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=startTime" })
  startTime?: string;
}
