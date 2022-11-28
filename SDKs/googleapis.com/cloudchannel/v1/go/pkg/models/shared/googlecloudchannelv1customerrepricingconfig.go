package shared

// GoogleCloudChannelV1CustomerRepricingConfigInput
// Configuration for how a reseller will reprice a Customer.
type GoogleCloudChannelV1CustomerRepricingConfigInput struct {
	RepricingConfig *GoogleCloudChannelV1RepricingConfig `json:"repricingConfig,omitempty"`
}

// GoogleCloudChannelV1CustomerRepricingConfig
// Configuration for how a reseller will reprice a Customer.
type GoogleCloudChannelV1CustomerRepricingConfig struct {
	Name            *string                              `json:"name,omitempty"`
	RepricingConfig *GoogleCloudChannelV1RepricingConfig `json:"repricingConfig,omitempty"`
	UpdateTime      *string                              `json:"updateTime,omitempty"`
}
