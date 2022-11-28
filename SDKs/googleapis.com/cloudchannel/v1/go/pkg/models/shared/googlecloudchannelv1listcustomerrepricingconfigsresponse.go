package shared

// GoogleCloudChannelV1ListCustomerRepricingConfigsResponse
// Response message for CloudChannelService.ListCustomerRepricingConfigs.
type GoogleCloudChannelV1ListCustomerRepricingConfigsResponse struct {
	CustomerRepricingConfigs []GoogleCloudChannelV1CustomerRepricingConfig `json:"customerRepricingConfigs,omitempty"`
	NextPageToken            *string                                       `json:"nextPageToken,omitempty"`
}
