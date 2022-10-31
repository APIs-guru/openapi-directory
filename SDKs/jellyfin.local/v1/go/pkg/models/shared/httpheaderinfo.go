package shared



type HTTPHeaderInfo struct {
    Match *HeaderMatchTypeEnum `json:"Match,omitempty"`
    Name *string `json:"Name,omitempty"`
    Value *string `json:"Value,omitempty"`
    
}

