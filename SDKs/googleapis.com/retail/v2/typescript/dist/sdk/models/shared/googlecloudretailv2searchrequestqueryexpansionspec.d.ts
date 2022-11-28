import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum {
    ConditionUnspecified = "CONDITION_UNSPECIFIED",
    Disabled = "DISABLED",
    Auto = "AUTO"
}
/**
 * Specification to determine under which conditions query expansion should occur.
**/
export declare class GoogleCloudRetailV2SearchRequestQueryExpansionSpec extends SpeakeasyBase {
    condition?: GoogleCloudRetailV2SearchRequestQueryExpansionSpecConditionEnum;
    pinUnexpandedResults?: boolean;
}
