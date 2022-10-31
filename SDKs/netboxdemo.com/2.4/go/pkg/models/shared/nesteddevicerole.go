package shared



type NestedDeviceRole struct {
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Slug string `json:"slug"`
    URL *string `json:"url,omitempty"`
    
}

