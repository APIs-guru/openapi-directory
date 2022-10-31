package shared



type Template struct {
    Action *Action `json:"action,omitempty"`
    HealthChecks []HealthCheck `json:"healthChecks,omitempty"`
    Version *string `json:"version,omitempty"`
    VMParams *VMParams `json:"vmParams,omitempty"`
    
}

