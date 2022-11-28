package shared

// GoogleCloudChannelV1ChannelPartnerRepricingConfigInput
// Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
type GoogleCloudChannelV1ChannelPartnerRepricingConfigInput struct {
	RepricingConfig *GoogleCloudChannelV1RepricingConfig `json:"repricingConfig,omitempty"`
}

// GoogleCloudChannelV1ChannelPartnerRepricingConfig
// Configuration for how a distributor will rebill a channel partner (also known as a distributor-authorized reseller).
type GoogleCloudChannelV1ChannelPartnerRepricingConfig struct {
	Name            *string                              `json:"name,omitempty"`
	RepricingConfig *GoogleCloudChannelV1RepricingConfig `json:"repricingConfig,omitempty"`
	UpdateTime      *string                              `json:"updateTime,omitempty"`
}
