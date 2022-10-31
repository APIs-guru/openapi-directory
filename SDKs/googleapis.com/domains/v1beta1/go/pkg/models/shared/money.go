package shared



type Money struct {
    CurrencyCode *string `json:"currencyCode,omitempty"`
    Nanos *int32 `json:"nanos,omitempty"`
    Units *string `json:"units,omitempty"`
    
}

