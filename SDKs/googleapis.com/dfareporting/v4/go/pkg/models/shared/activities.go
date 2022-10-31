package shared



type Activities struct {
    Filters []DimensionValue `json:"filters,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MetricNames []string `json:"metricNames,omitempty"`
    
}

