package shared



type Response struct {
    BackendLatency *string `json:"backendLatency,omitempty"`
    Code *string `json:"code,omitempty"`
    Headers map[string]string `json:"headers,omitempty"`
    Size *string `json:"size,omitempty"`
    Time *string `json:"time,omitempty"`
    
}

