package shared

type RepricingRuleRestrictionBoundary struct {
	PercentageDelta *int32  `json:"percentageDelta,omitempty"`
	PriceDelta      *string `json:"priceDelta,omitempty"`
}
