package shared



type IssuingOptions struct {
    IncludeCaCertURL *bool `json:"includeCaCertUrl,omitempty"`
    IncludeCrlAccessURL *bool `json:"includeCrlAccessUrl,omitempty"`
    
}

