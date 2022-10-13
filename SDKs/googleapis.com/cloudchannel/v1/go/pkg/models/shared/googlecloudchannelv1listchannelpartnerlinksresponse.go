package shared

type GoogleCloudChannelV1ListChannelPartnerLinksResponse struct {
	ChannelPartnerLinks []GoogleCloudChannelV1ChannelPartnerLink `json:"channelPartnerLinks"`
	NextPageToken       *string                                  `json:"nextPageToken"`
}
