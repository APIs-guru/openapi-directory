package shared



type TaxRate struct {
    Default *bool `json:"default,omitempty"`
    Label string `json:"label"`
    Percentage *float64 `json:"percentage,omitempty"`
    UUID string `json:"uuid"`
    
}

