package shared



type NestedDeviceType struct {
    ID *int64 `json:"id,omitempty"`
    Manufacturer *NestedManufacturer `json:"manufacturer,omitempty"`
    Model string `json:"model"`
    Slug string `json:"slug"`
    URL *string `json:"url,omitempty"`
    
}

