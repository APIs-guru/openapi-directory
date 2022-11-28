package shared

// RepricingRuleRestrictionBoundary
// Definition of a boundary.
type RepricingRuleRestrictionBoundary struct {
	PercentageDelta *int32  `json:"percentageDelta,omitempty"`
	PriceDelta      *string `json:"priceDelta,omitempty"`
}
