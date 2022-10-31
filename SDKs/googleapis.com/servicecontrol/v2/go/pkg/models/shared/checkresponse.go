package shared



type CheckResponse struct {
    Headers map[string]string `json:"headers,omitempty"`
    Status *Status `json:"status,omitempty"`
    
}

