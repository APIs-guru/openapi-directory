import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RepricingRuleEffectiveTimeFixedTimePeriod } from "./repricingruleeffectivetimefixedtimeperiod";


export class RepricingRuleEffectiveTime extends SpeakeasyBase {
  @Metadata({ data: "json, name=fixedTimePeriods", elemType: shared.RepricingRuleEffectiveTimeFixedTimePeriod })
  fixedTimePeriods?: RepricingRuleEffectiveTimeFixedTimePeriod[];
}
