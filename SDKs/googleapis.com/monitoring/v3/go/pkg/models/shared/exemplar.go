package shared



type Exemplar struct {
    Attachments []map[string]interface{} `json:"attachments,omitempty"`
    Timestamp *string `json:"timestamp,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

