package shared



type NestedPowerPanel struct {
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    PowerfeedCount *int64 `json:"powerfeed_count,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

