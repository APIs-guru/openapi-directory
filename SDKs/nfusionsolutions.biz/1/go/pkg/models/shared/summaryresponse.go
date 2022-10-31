package shared



type SummaryResponse struct {
    Data *Summary `json:"data,omitempty"`
    Error *string `json:"error,omitempty"`
    RequestedCurrency *string `json:"requestedCurrency,omitempty"`
    RequestedSymbol *string `json:"requestedSymbol,omitempty"`
    RequestedUnitOfMeasure *string `json:"requestedUnitOfMeasure,omitempty"`
    Success *bool `json:"success,omitempty"`
    
}

