package shared

type ListRepricingRulesResponse struct {
	NextPageToken  *string         `json:"nextPageToken"`
	RepricingRules []RepricingRule `json:"repricingRules"`
}
