package shared



type WritableInterfaceTemplate struct {
    DeviceType int64 `json:"device_type"`
    FormFactor *int64 `json:"form_factor,omitempty"`
    ID *int64 `json:"id,omitempty"`
    MgmtOnly *bool `json:"mgmt_only,omitempty"`
    Name string `json:"name"`
    
}

