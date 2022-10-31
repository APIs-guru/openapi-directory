package shared



type SavedQuery struct {
    CreateTime *string `json:"createTime,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    MatterID *string `json:"matterId,omitempty"`
    Query *Query `json:"query,omitempty"`
    SavedQueryID *string `json:"savedQueryId,omitempty"`
    
}

