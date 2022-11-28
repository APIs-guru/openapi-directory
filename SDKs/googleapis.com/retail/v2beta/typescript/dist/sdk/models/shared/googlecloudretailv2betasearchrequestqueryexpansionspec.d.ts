import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum {
    ConditionUnspecified = "CONDITION_UNSPECIFIED",
    Disabled = "DISABLED",
    Auto = "AUTO"
}
/**
 * Specification to determine under which conditions query expansion should occur.
**/
export declare class GoogleCloudRetailV2betaSearchRequestQueryExpansionSpec extends SpeakeasyBase {
    condition?: GoogleCloudRetailV2betaSearchRequestQueryExpansionSpecConditionEnum;
    pinUnexpandedResults?: boolean;
}
