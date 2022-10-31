package shared



type Service struct {
    CreateTime *string `json:"createTime,omitempty"`
    Endpoints []Endpoint `json:"endpoints,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

