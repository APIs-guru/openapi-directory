package shared



type Ruleset struct {
    CreateTime *string `json:"createTime,omitempty"`
    Metadata *Metadata `json:"metadata,omitempty"`
    Name *string `json:"name,omitempty"`
    Source *Source `json:"source,omitempty"`
    
}

