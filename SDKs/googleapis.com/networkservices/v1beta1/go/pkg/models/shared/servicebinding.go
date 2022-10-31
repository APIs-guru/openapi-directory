package shared



type ServiceBinding struct {
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Service *string `json:"service,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

