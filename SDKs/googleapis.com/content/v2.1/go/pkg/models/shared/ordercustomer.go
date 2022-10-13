package shared

type OrderCustomer struct {
	FullName              *string                           `json:"fullName"`
	InvoiceReceivingEmail *string                           `json:"invoiceReceivingEmail"`
	LoyaltyInfo           *OrderCustomerLoyaltyInfo         `json:"loyaltyInfo"`
	MarketingRightsInfo   *OrderCustomerMarketingRightsInfo `json:"marketingRightsInfo"`
}
