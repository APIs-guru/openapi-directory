package shared

// LinkedVpnTunnelsInput
// A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
type LinkedVpnTunnelsInput struct {
	SiteToSiteDataTransfer *bool    `json:"siteToSiteDataTransfer,omitempty"`
	Uris                   []string `json:"uris,omitempty"`
}

// LinkedVpnTunnels
// A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
type LinkedVpnTunnels struct {
	SiteToSiteDataTransfer *bool    `json:"siteToSiteDataTransfer,omitempty"`
	Uris                   []string `json:"uris,omitempty"`
	VpcNetwork             *string  `json:"vpcNetwork,omitempty"`
}
