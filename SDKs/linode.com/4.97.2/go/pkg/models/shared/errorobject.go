package shared



type ErrorObject struct {
    Field *string `json:"field,omitempty"`
    Reason *string `json:"reason,omitempty"`
    
}

