package shared



type OperationError struct {
    Code *string `json:"code,omitempty"`
    Kind *string `json:"kind,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

