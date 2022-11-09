import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TargetingExpansionConfigTargetingExpansionLevelEnum {
    TargetingExpansionLevelUnspecified = "TARGETING_EXPANSION_LEVEL_UNSPECIFIED"
,    NoExpansion = "NO_EXPANSION"
,    LeastExpansion = "LEAST_EXPANSION"
,    SomeExpansion = "SOME_EXPANSION"
,    BalancedExpansion = "BALANCED_EXPANSION"
,    MoreExpansion = "MORE_EXPANSION"
,    MostExpansion = "MOST_EXPANSION"
}


// TargetingExpansionConfig
/** 
 * Settings that control the targeting expansion of the line item. Targeting expansion allows the line item to reach a larger audience based on the original audience list and the targeting expansion level.
**/
export class TargetingExpansionConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=excludeFirstPartyAudience" })
  excludeFirstPartyAudience?: boolean;

  @Metadata({ data: "json, name=targetingExpansionLevel" })
  targetingExpansionLevel?: TargetingExpansionConfigTargetingExpansionLevelEnum;
}
