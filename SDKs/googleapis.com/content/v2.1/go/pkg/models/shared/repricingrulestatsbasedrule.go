package shared

type RepricingRuleStatsBasedRule struct {
	PercentageDelta *int32  `json:"percentageDelta"`
	PriceDelta      *string `json:"priceDelta"`
}
