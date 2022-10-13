package shared

type OrderCustomerMarketingRightsInfo struct {
	ExplicitMarketingPreference *string `json:"explicitMarketingPreference"`
	LastUpdatedTimestamp        *string `json:"lastUpdatedTimestamp"`
	MarketingEmailAddress       *string `json:"marketingEmailAddress"`
}
