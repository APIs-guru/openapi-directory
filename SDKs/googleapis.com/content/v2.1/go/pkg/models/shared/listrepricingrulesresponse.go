package shared

type ListRepricingRulesResponse struct {
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	RepricingRules []RepricingRule `json:"repricingRules,omitempty"`
}
