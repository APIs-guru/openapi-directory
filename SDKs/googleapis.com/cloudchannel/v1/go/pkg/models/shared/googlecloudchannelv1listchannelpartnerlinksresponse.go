package shared

// GoogleCloudChannelV1ListChannelPartnerLinksResponse
// Response message for CloudChannelService.ListChannelPartnerLinks.
type GoogleCloudChannelV1ListChannelPartnerLinksResponse struct {
	ChannelPartnerLinks []GoogleCloudChannelV1ChannelPartnerLink `json:"channelPartnerLinks,omitempty"`
	NextPageToken       *string                                  `json:"nextPageToken,omitempty"`
}
