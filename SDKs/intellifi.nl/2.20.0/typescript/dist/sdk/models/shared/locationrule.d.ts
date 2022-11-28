import { SpeakeasyBase } from "../../../internal/utils";
import { Location } from "./location";
import { LocationRuleTypeEnum } from "./locationruletypeenum";
export declare class LocationRuleConditions11 extends SpeakeasyBase {
    fromLocation?: Location;
}
export declare class LocationRuleConditions12 extends SpeakeasyBase {
    fromLocationId?: string;
}
export declare class LocationRuleConditions13 extends SpeakeasyBase {
    fromLocationUrl?: string;
}
export declare class LocationRuleConditions21 extends SpeakeasyBase {
    toLocation?: Location;
}
export declare class LocationRuleConditions22 extends SpeakeasyBase {
    toLocationId?: string;
}
export declare class LocationRuleConditions23 extends SpeakeasyBase {
    toLocationUrl?: string;
}
export declare class LocationRule extends SpeakeasyBase {
    conditions?: any;
    enabled?: boolean;
    id?: string;
    label?: string;
    parameters?: Map<string, any>;
    timeCreated?: string;
    timeUpdated?: string;
    type?: LocationRuleTypeEnum;
    url?: string;
}
