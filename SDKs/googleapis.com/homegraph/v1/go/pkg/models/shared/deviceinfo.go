package shared



type DeviceInfo struct {
    HwVersion *string `json:"hwVersion,omitempty"`
    Manufacturer *string `json:"manufacturer,omitempty"`
    Model *string `json:"model,omitempty"`
    SwVersion *string `json:"swVersion,omitempty"`
    
}

