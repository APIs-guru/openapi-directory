package shared

type RepricingRuleRestrictionBoundary struct {
	PercentageDelta *int32  `json:"percentageDelta"`
	PriceDelta      *string `json:"priceDelta"`
}
