import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocationRuleTypeEnum } from "./locationruletypeenum";



// LocationRuleUpdateConditions
/** 
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.
**/
export class LocationRuleUpdateConditions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from_location" })
  fromLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=to_location" })
  toLocation?: string;
}


export class LocationRuleUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=conditions" })
  conditions?: LocationRuleUpdateConditions;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: LocationRuleTypeEnum;
}
