package shared



type OrderCustomer struct {
    FullName *string `json:"fullName,omitempty"`
    InvoiceReceivingEmail *string `json:"invoiceReceivingEmail,omitempty"`
    LoyaltyInfo *OrderCustomerLoyaltyInfo `json:"loyaltyInfo,omitempty"`
    MarketingRightsInfo *OrderCustomerMarketingRightsInfo `json:"marketingRightsInfo,omitempty"`
    
}

