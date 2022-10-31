package shared



type FailurePolicy struct {
    Retry map[string]interface{} `json:"retry,omitempty"`
    
}

