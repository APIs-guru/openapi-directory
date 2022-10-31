package shared

type RepricingRuleRestriction struct {
	Floor                  *RepricingRuleRestrictionBoundary `json:"floor,omitempty"`
	UseAutoPricingMinPrice *bool                             `json:"useAutoPricingMinPrice,omitempty"`
}
