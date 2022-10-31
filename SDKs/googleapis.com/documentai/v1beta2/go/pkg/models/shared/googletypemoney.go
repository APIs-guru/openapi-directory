package shared



type GoogleTypeMoney struct {
    CurrencyCode *string `json:"currencyCode,omitempty"`
    Nanos *int32 `json:"nanos,omitempty"`
    Units *string `json:"units,omitempty"`
    
}

