package shared

type OrderCustomerMarketingRightsInfo struct {
	ExplicitMarketingPreference *string `json:"explicitMarketingPreference,omitempty"`
	LastUpdatedTimestamp        *string `json:"lastUpdatedTimestamp,omitempty"`
	MarketingEmailAddress       *string `json:"marketingEmailAddress,omitempty"`
}
