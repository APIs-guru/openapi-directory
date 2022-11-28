package shared

// ClientInfo
// Information about the client
type ClientInfo struct {
	Firmware     *string `json:"firmware,omitempty"`
	Manufacturer string  `json:"manufacturer"`
	Model        string  `json:"model"`
	Name         string  `json:"name"`
	Platform     *string `json:"platform,omitempty"`
	Version      string  `json:"version"`
}
