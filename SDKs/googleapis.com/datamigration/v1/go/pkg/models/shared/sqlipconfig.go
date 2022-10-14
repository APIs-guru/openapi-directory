package shared

type SQLIPConfig struct {
	AuthorizedNetworks []SQLACLEntry `json:"authorizedNetworks,omitempty"`
	EnableIpv4         *bool         `json:"enableIpv4,omitempty"`
	PrivateNetwork     *string       `json:"privateNetwork,omitempty"`
	RequireSsl         *bool         `json:"requireSsl,omitempty"`
}
