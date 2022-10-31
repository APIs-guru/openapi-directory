package shared



type Resource struct {
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Service *string `json:"service,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

