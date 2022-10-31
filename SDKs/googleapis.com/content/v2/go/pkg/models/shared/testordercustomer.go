package shared

type TestOrderCustomer struct {
	Email                       *string                               `json:"email,omitempty"`
	ExplicitMarketingPreference *bool                                 `json:"explicitMarketingPreference,omitempty"`
	FullName                    *string                               `json:"fullName,omitempty"`
	MarketingRightsInfo         *TestOrderCustomerMarketingRightsInfo `json:"marketingRightsInfo,omitempty"`
}
