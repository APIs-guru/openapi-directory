package shared



type Session struct {
    ApproximateLastUseTime *string `json:"approximateLastUseTime,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    CreatorRole *string `json:"creatorRole,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

