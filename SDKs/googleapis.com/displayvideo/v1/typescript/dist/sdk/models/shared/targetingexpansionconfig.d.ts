import { SpeakeasyBase } from "../../../internal/utils";
export declare enum TargetingExpansionConfigTargetingExpansionLevelEnum {
    TargetingExpansionLevelUnspecified = "TARGETING_EXPANSION_LEVEL_UNSPECIFIED",
    NoExpansion = "NO_EXPANSION",
    LeastExpansion = "LEAST_EXPANSION",
    SomeExpansion = "SOME_EXPANSION",
    BalancedExpansion = "BALANCED_EXPANSION",
    MoreExpansion = "MORE_EXPANSION",
    MostExpansion = "MOST_EXPANSION"
}
/**
 * Settings that control the targeting expansion of the line item. Targeting expansion allows the line item to reach a larger audience based on the original audience list and the targeting expansion level. Beginning November 7, 2022, these settings may represent the [optimized targeting feature](//support.google.com/displayvideo/answer/12060859) in place of targeting expansion. This feature will be rolled out to all partners by November 9, 2022.
**/
export declare class TargetingExpansionConfig extends SpeakeasyBase {
    excludeFirstPartyAudience?: boolean;
    targetingExpansionLevel?: TargetingExpansionConfigTargetingExpansionLevelEnum;
}
