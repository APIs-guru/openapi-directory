package shared

type LinkedVpnTunnels struct {
	SiteToSiteDataTransfer *bool    `json:"siteToSiteDataTransfer"`
	Uris                   []string `json:"uris"`
}
