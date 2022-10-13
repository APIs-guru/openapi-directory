package shared

type TestOrderCustomer struct {
	Email                       *string                               `json:"email"`
	ExplicitMarketingPreference *bool                                 `json:"explicitMarketingPreference"`
	FullName                    *string                               `json:"fullName"`
	MarketingRightsInfo         *TestOrderCustomerMarketingRightsInfo `json:"marketingRightsInfo"`
}
