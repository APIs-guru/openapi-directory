package shared



type WritableTopologyMap struct {
    Description *string `json:"description,omitempty"`
    DevicePatterns string `json:"device_patterns"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Site *int64 `json:"site,omitempty"`
    Slug string `json:"slug"`
    
}

