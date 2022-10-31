package shared



type WritableConfigContext struct {
    ClusterGroups []int64 `json:"cluster_groups,omitempty"`
    Clusters []int64 `json:"clusters,omitempty"`
    Data string `json:"data"`
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    IsActive *bool `json:"is_active,omitempty"`
    Name string `json:"name"`
    Platforms []int64 `json:"platforms,omitempty"`
    Regions []int64 `json:"regions,omitempty"`
    Roles []int64 `json:"roles,omitempty"`
    Sites []int64 `json:"sites,omitempty"`
    Tags []string `json:"tags,omitempty"`
    TenantGroups []int64 `json:"tenant_groups,omitempty"`
    Tenants []int64 `json:"tenants,omitempty"`
    Weight *int64 `json:"weight,omitempty"`
    
}

