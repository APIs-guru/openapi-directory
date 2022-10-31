package shared



type Unauthorized struct {
    ErrorCode *string `json:"error-code,omitempty"`
    ErrorCodeLabel *string `json:"error-code-label,omitempty"`
    
}

