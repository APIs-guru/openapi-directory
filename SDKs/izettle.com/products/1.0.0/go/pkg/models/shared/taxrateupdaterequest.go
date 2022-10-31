package shared



type TaxRateUpdateRequest struct {
    Default *bool `json:"default,omitempty"`
    Label *string `json:"label,omitempty"`
    Percentage *float64 `json:"percentage,omitempty"`
    
}

