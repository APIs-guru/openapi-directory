import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocationRuleTypeEnum } from "./locationruletypeenum";


// LocationRuleUpdateConditions
/** 
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.
**/
export class LocationRuleUpdateConditions extends SpeakeasyBase {
  @Metadata({ data: "json, name=from_location" })
  fromLocation?: string;

  @Metadata({ data: "json, name=to_location" })
  toLocation?: string;
}


export class LocationRuleUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=conditions" })
  conditions?: LocationRuleUpdateConditions;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @Metadata({ data: "json, name=type" })
  type?: LocationRuleTypeEnum;
}
