import { SpeakeasyBase } from "../../../internal/utils";
import { LocationRuleTypeEnum } from "./locationruletypeenum";
/**
 * Scope of this rule, e.g. moves at or away from a specific location or towards a specific location. The `from_location` is mandatory. The `to_location` is either mandatory, optional or not allowed depending on rule type.
**/
export declare class LocationRuleUpdateConditions extends SpeakeasyBase {
    fromLocation?: string;
    toLocation?: string;
}
export declare class LocationRuleUpdate extends SpeakeasyBase {
    conditions?: LocationRuleUpdateConditions;
    enabled?: boolean;
    label?: string;
    parameters?: Map<string, any>;
    type?: LocationRuleTypeEnum;
}
