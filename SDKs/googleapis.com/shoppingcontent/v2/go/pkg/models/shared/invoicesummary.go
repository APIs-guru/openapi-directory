package shared



type InvoiceSummary struct {
    AdditionalChargeSummaries []InvoiceSummaryAdditionalChargeSummary `json:"additionalChargeSummaries,omitempty"`
    CustomerBalance *Amount `json:"customerBalance,omitempty"`
    GoogleBalance *Amount `json:"googleBalance,omitempty"`
    MerchantBalance *Amount `json:"merchantBalance,omitempty"`
    ProductTotal *Amount `json:"productTotal,omitempty"`
    PromotionSummaries []Promotion `json:"promotionSummaries,omitempty"`
    
}

