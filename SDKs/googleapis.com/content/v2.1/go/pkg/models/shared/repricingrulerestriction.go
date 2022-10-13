package shared

type RepricingRuleRestriction struct {
	Floor                  *RepricingRuleRestrictionBoundary `json:"floor"`
	UseAutoPricingMinPrice *bool                             `json:"useAutoPricingMinPrice"`
}
