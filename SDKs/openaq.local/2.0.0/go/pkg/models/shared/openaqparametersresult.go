package shared



type OpenAqParametersResult struct {
    Meta *Meta `json:"meta,omitempty"`
    Results []ParametersRow `json:"results"`
    
}

