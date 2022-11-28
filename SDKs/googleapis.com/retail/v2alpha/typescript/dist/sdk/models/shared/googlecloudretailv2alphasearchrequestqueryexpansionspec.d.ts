import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum {
    ConditionUnspecified = "CONDITION_UNSPECIFIED",
    Disabled = "DISABLED",
    Auto = "AUTO"
}
/**
 * Specification to determine under which conditions query expansion should occur.
**/
export declare class GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpec extends SpeakeasyBase {
    condition?: GoogleCloudRetailV2alphaSearchRequestQueryExpansionSpecConditionEnum;
    pinUnexpandedResults?: boolean;
}
