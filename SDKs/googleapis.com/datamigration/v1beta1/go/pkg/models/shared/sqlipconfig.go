package shared

type SQLIPConfig struct {
	AuthorizedNetworks []SQLACLEntry `json:"authorizedNetworks"`
	EnableIpv4         *bool         `json:"enableIpv4"`
	PrivateNetwork     *string       `json:"privateNetwork"`
	RequireSsl         *bool         `json:"requireSsl"`
}
