package shared

type LinkedInterconnectAttachments struct {
	SiteToSiteDataTransfer *bool    `json:"siteToSiteDataTransfer"`
	Uris                   []string `json:"uris"`
}
