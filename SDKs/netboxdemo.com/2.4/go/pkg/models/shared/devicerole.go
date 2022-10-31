package shared



type DeviceRole struct {
    Color string `json:"color"`
    ID *int64 `json:"id,omitempty"`
    Name string `json:"name"`
    Slug string `json:"slug"`
    VMRole *bool `json:"vm_role,omitempty"`
    
}

