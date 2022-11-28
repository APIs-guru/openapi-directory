package shared

// NetworkConfig
// Network related configurations.
type NetworkConfig struct {
	CanIPForward      *bool   `json:"canIpForward,omitempty"`
	EnableExternalIps *bool   `json:"enableExternalIps,omitempty"`
	Network           *string `json:"network,omitempty"`
	Subnetwork        *string `json:"subnetwork,omitempty"`
}
