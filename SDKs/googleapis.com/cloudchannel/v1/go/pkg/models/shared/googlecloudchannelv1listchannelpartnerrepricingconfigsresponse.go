package shared

type GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse struct {
	ChannelPartnerRepricingConfigs []GoogleCloudChannelV1ChannelPartnerRepricingConfig `json:"channelPartnerRepricingConfigs"`
	NextPageToken                  *string                                             `json:"nextPageToken"`
}
