package shared



type Endpoint struct {
    Address *string `json:"address,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Metadata map[string]string `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    Network *string `json:"network,omitempty"`
    Port *int32 `json:"port,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

