import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepricingRuleEffectiveTimeFixedTimePeriod } from "./repricingruleeffectivetimefixedtimeperiod";



export class RepricingRuleEffectiveTime extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fixedTimePeriods", elemType: RepricingRuleEffectiveTimeFixedTimePeriod })
  fixedTimePeriods?: RepricingRuleEffectiveTimeFixedTimePeriod[];
}
