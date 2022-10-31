package shared



type Group struct {
    DisplayName *string `json:"displayName,omitempty"`
    Filter *string `json:"filter,omitempty"`
    IsCluster *bool `json:"isCluster,omitempty"`
    Name *string `json:"name,omitempty"`
    ParentName *string `json:"parentName,omitempty"`
    
}

