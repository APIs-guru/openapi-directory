package shared



type InvoiceSummary struct {
    AdditionalChargeSummaries []InvoiceSummaryAdditionalChargeSummary `json:"additionalChargeSummaries,omitempty"`
    ProductTotal *Amount `json:"productTotal,omitempty"`
    
}

