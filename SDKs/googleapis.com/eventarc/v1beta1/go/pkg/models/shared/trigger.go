package shared



type Trigger struct {
    CreateTime *string `json:"createTime,omitempty"`
    Destination *Destination `json:"destination,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    MatchingCriteria []MatchingCriteria `json:"matchingCriteria,omitempty"`
    Name *string `json:"name,omitempty"`
    ServiceAccount *string `json:"serviceAccount,omitempty"`
    Transport *Transport `json:"transport,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

