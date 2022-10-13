package shared

type NetworkConfig struct {
	CanIPForward      *bool   `json:"canIpForward"`
	EnableExternalIps *bool   `json:"enableExternalIps"`
	Network           *string `json:"network"`
	Subnetwork        *string `json:"subnetwork"`
}
