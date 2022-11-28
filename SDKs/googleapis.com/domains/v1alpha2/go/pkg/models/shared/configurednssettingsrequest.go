package shared

// ConfigureDNSSettingsRequestInput
// Request for the `ConfigureDnsSettings` method.
type ConfigureDNSSettingsRequestInput struct {
	DNSSettings  *DNSSettingsInput `json:"dnsSettings,omitempty"`
	UpdateMask   *string           `json:"updateMask,omitempty"`
	ValidateOnly *bool             `json:"validateOnly,omitempty"`
}
