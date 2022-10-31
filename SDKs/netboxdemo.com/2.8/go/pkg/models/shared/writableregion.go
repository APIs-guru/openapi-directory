package shared



type WritableRegion struct {
    Description *string `json:"description,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Parent *int64 `json:"parent,omitempty"`
    SiteCount *int64 `json:"site_count,omitempty"`
    Slug string `json:"slug"`
    
}

