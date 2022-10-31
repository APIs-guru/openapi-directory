package shared



type DataSourceParameter struct {
    Name *string `json:"name,omitempty"`
    NamedRangeID *string `json:"namedRangeId,omitempty"`
    Range *GridRange `json:"range,omitempty"`
    
}

