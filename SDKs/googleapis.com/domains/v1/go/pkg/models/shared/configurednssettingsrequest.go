package shared

type ConfigureDNSSettingsRequest struct {
	DNSSettings  *DNSSettings `json:"dnsSettings"`
	UpdateMask   *string      `json:"updateMask"`
	ValidateOnly *bool        `json:"validateOnly"`
}
