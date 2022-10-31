package shared



type CounterOptions struct {
    CustomFields []CustomField `json:"customFields,omitempty"`
    Field *string `json:"field,omitempty"`
    Metric *string `json:"metric,omitempty"`
    
}

