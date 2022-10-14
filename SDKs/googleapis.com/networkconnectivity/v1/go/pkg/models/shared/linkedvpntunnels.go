package shared

type LinkedVpnTunnels struct {
	SiteToSiteDataTransfer *bool    `json:"siteToSiteDataTransfer,omitempty"`
	Uris                   []string `json:"uris,omitempty"`
}
