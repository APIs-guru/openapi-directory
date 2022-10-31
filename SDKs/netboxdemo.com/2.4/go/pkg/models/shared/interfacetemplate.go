package shared



type InterfaceTemplateFormFactor struct {
    Label string `json:"label"`
    Value int64 `json:"value"`
    
}

type InterfaceTemplate struct {
    DeviceType NestedDeviceType `json:"device_type"`
    FormFactor *InterfaceTemplateFormFactor `json:"form_factor,omitempty"`
    ID *int64 `json:"id,omitempty"`
    MgmtOnly *bool `json:"mgmt_only,omitempty"`
    Name string `json:"name"`
    
}

