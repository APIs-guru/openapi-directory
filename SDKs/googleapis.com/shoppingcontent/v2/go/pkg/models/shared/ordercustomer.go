package shared

type OrderCustomer struct {
	Email                       *string                           `json:"email"`
	ExplicitMarketingPreference *bool                             `json:"explicitMarketingPreference"`
	FullName                    *string                           `json:"fullName"`
	InvoiceReceivingEmail       *string                           `json:"invoiceReceivingEmail"`
	MarketingRightsInfo         *OrderCustomerMarketingRightsInfo `json:"marketingRightsInfo"`
}
