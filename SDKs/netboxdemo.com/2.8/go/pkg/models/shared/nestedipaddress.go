package shared



type NestedIPAddress struct {
    Address string `json:"address"`
    Family *string `json:"family,omitempty"`
    ID *int64 `json:"id,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

