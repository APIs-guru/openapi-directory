package shared



type MetricStructuredName struct {
    Context map[string]string `json:"context,omitempty"`
    Name *string `json:"name,omitempty"`
    Origin *string `json:"origin,omitempty"`
    
}

