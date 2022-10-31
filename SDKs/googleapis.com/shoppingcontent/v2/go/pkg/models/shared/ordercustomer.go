package shared



type OrderCustomer struct {
    Email *string `json:"email,omitempty"`
    ExplicitMarketingPreference *bool `json:"explicitMarketingPreference,omitempty"`
    FullName *string `json:"fullName,omitempty"`
    InvoiceReceivingEmail *string `json:"invoiceReceivingEmail,omitempty"`
    MarketingRightsInfo *OrderCustomerMarketingRightsInfo `json:"marketingRightsInfo,omitempty"`
    
}

