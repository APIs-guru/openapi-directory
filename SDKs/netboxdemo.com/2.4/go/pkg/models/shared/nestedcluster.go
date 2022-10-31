package shared



type NestedCluster struct {
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    URL *string `json:"url,omitempty"`
    
}

