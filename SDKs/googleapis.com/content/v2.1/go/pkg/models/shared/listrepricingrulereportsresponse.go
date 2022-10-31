package shared



type ListRepricingRuleReportsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    RepricingRuleReports []RepricingRuleReport `json:"repricingRuleReports,omitempty"`
    
}

