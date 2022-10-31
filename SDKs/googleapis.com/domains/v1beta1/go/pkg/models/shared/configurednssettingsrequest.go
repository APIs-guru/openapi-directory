package shared



type ConfigureDNSSettingsRequest struct {
    DNSSettings *DNSSettings `json:"dnsSettings,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    ValidateOnly *bool `json:"validateOnly,omitempty"`
    
}

