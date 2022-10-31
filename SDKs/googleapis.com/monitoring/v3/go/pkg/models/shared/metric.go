package shared



type Metric struct {
    Labels map[string]string `json:"labels,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

