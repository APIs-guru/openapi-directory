package shared



type DynamicGroupMetadata struct {
    Queries []DynamicGroupQuery `json:"queries,omitempty"`
    Status *DynamicGroupStatus `json:"status,omitempty"`
    
}

