package shared

type ListRepricingRuleReportsResponse struct {
	NextPageToken        *string               `json:"nextPageToken"`
	RepricingRuleReports []RepricingRuleReport `json:"repricingRuleReports"`
}
