package shared



type Mesh struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    InterceptionPort *int32 `json:"interceptionPort,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

