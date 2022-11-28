import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { DayPartTargeting } from "./dayparttargeting";
import { GeoTargeting } from "./geotargeting";
import { KeyValueTargetingExpression } from "./keyvaluetargetingexpression";
import { LanguageTargeting } from "./languagetargeting";
import { ListTargetingExpression } from "./listtargetingexpression";
import { TechnologyTargeting } from "./technologytargeting";
/**
 * Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
**/
export declare class TargetingTemplate extends SpeakeasyBase {
    accountId?: string;
    advertiserId?: string;
    advertiserIdDimensionValue?: DimensionValue;
    dayPartTargeting?: DayPartTargeting;
    geoTargeting?: GeoTargeting;
    id?: string;
    keyValueTargetingExpression?: KeyValueTargetingExpression;
    kind?: string;
    languageTargeting?: LanguageTargeting;
    listTargetingExpression?: ListTargetingExpression;
    name?: string;
    subaccountId?: string;
    technologyTargeting?: TechnologyTargeting;
}
