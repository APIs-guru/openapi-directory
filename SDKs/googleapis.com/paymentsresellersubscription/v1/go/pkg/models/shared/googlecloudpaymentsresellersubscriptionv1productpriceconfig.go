package shared

// GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig
// Configs the prices in an available region.
type GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig struct {
	Amount     *GoogleCloudPaymentsResellerSubscriptionV1Amount `json:"amount,omitempty"`
	RegionCode *string                                          `json:"regionCode,omitempty"`
}
