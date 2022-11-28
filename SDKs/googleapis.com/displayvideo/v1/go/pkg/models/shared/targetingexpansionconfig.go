package shared

type TargetingExpansionConfigTargetingExpansionLevelEnum string

const (
	TargetingExpansionConfigTargetingExpansionLevelEnumTargetingExpansionLevelUnspecified TargetingExpansionConfigTargetingExpansionLevelEnum = "TARGETING_EXPANSION_LEVEL_UNSPECIFIED"
	TargetingExpansionConfigTargetingExpansionLevelEnumNoExpansion                        TargetingExpansionConfigTargetingExpansionLevelEnum = "NO_EXPANSION"
	TargetingExpansionConfigTargetingExpansionLevelEnumLeastExpansion                     TargetingExpansionConfigTargetingExpansionLevelEnum = "LEAST_EXPANSION"
	TargetingExpansionConfigTargetingExpansionLevelEnumSomeExpansion                      TargetingExpansionConfigTargetingExpansionLevelEnum = "SOME_EXPANSION"
	TargetingExpansionConfigTargetingExpansionLevelEnumBalancedExpansion                  TargetingExpansionConfigTargetingExpansionLevelEnum = "BALANCED_EXPANSION"
	TargetingExpansionConfigTargetingExpansionLevelEnumMoreExpansion                      TargetingExpansionConfigTargetingExpansionLevelEnum = "MORE_EXPANSION"
	TargetingExpansionConfigTargetingExpansionLevelEnumMostExpansion                      TargetingExpansionConfigTargetingExpansionLevelEnum = "MOST_EXPANSION"
)

// TargetingExpansionConfig
// Settings that control the targeting expansion of the line item. Targeting expansion allows the line item to reach a larger audience based on the original audience list and the targeting expansion level. Beginning November 7, 2022, these settings may represent the [optimized targeting feature](//support.google.com/displayvideo/answer/12060859) in place of targeting expansion. This feature will be rolled out to all partners by November 9, 2022.
type TargetingExpansionConfig struct {
	ExcludeFirstPartyAudience *bool                                                `json:"excludeFirstPartyAudience,omitempty"`
	TargetingExpansionLevel   *TargetingExpansionConfigTargetingExpansionLevelEnum `json:"targetingExpansionLevel,omitempty"`
}
