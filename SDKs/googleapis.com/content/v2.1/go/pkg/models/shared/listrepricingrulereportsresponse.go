package shared

// ListRepricingRuleReportsResponse
// Response message for the ListRepricingRuleReports method.
type ListRepricingRuleReportsResponse struct {
	NextPageToken        *string               `json:"nextPageToken,omitempty"`
	RepricingRuleReports []RepricingRuleReport `json:"repricingRuleReports,omitempty"`
}
