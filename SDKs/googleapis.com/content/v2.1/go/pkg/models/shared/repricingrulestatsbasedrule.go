package shared

// RepricingRuleStatsBasedRule
// Definition of stats based rule.
type RepricingRuleStatsBasedRule struct {
	PercentageDelta *int32  `json:"percentageDelta,omitempty"`
	PriceDelta      *string `json:"priceDelta,omitempty"`
}
