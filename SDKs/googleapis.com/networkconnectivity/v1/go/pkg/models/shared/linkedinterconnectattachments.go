package shared

// LinkedInterconnectAttachments
// A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
type LinkedInterconnectAttachments struct {
	SiteToSiteDataTransfer *bool    `json:"siteToSiteDataTransfer,omitempty"`
	Uris                   []string `json:"uris,omitempty"`
	VpcNetwork             *string  `json:"vpcNetwork,omitempty"`
}

// LinkedInterconnectAttachmentsInput
// A collection of VLAN attachment resources. These resources should be redundant attachments that all advertise the same prefixes to Google Cloud. Alternatively, in active/passive configurations, all attachments should be capable of advertising the same prefixes.
type LinkedInterconnectAttachmentsInput struct {
	SiteToSiteDataTransfer *bool    `json:"siteToSiteDataTransfer,omitempty"`
	Uris                   []string `json:"uris,omitempty"`
}
