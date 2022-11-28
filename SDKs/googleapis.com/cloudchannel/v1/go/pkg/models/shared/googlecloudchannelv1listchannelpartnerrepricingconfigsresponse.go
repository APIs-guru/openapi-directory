package shared

// GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse
// Response message for CloudChannelService.ListChannelPartnerRepricingConfigs.
type GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse struct {
	ChannelPartnerRepricingConfigs []GoogleCloudChannelV1ChannelPartnerRepricingConfig `json:"channelPartnerRepricingConfigs,omitempty"`
	NextPageToken                  *string                                             `json:"nextPageToken,omitempty"`
}
