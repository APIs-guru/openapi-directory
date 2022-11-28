package shared

// ListRepricingRulesResponse
// Response message for the `ListRepricingRules` method.
type ListRepricingRulesResponse struct {
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	RepricingRules []RepricingRule `json:"repricingRules,omitempty"`
}
