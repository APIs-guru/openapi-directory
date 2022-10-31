package shared



type NestedDeviceRole struct {
    DeviceCount *int64 `json:"device_count,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Slug string `json:"slug"`
    URL *string `json:"url,omitempty"`
    VirtualmachineCount *int64 `json:"virtualmachine_count,omitempty"`
    
}

