package shared

// RepricingRuleCostOfGoodsSaleRule
// A repricing rule that changes the sale price based on cost of goods sale.
type RepricingRuleCostOfGoodsSaleRule struct {
	PercentageDelta *int32  `json:"percentageDelta,omitempty"`
	PriceDelta      *string `json:"priceDelta,omitempty"`
}
