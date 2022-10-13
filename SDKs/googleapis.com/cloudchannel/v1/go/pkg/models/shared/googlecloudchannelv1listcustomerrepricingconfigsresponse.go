package shared

type GoogleCloudChannelV1ListCustomerRepricingConfigsResponse struct {
	CustomerRepricingConfigs []GoogleCloudChannelV1CustomerRepricingConfig `json:"customerRepricingConfigs"`
	NextPageToken            *string                                       `json:"nextPageToken"`
}
