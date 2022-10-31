package shared



type ClusterGroup struct {
    ClusterCount *int64 `json:"cluster_count,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Slug string `json:"slug"`
    
}

