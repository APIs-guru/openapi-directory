package shared



type AutoFillRequest struct {
    Range *GridRange `json:"range,omitempty"`
    SourceAndDestination *SourceAndDestination `json:"sourceAndDestination,omitempty"`
    UseAlternateSeries *bool `json:"useAlternateSeries,omitempty"`
    
}

