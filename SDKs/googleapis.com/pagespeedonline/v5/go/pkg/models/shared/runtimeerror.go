package shared



type RuntimeError struct {
    Code *string `json:"code,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

