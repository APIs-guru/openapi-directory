package shared

// GoogleCloudPaymentsResellerSubscriptionV1Product
// A Product resource that defines a subscription service that can be resold.
type GoogleCloudPaymentsResellerSubscriptionV1Product struct {
	Name                             *string                                                       `json:"name,omitempty"`
	PriceConfigs                     []GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig `json:"priceConfigs,omitempty"`
	RegionCodes                      []string                                                      `json:"regionCodes,omitempty"`
	SubscriptionBillingCycleDuration *GoogleCloudPaymentsResellerSubscriptionV1Duration            `json:"subscriptionBillingCycleDuration,omitempty"`
	Titles                           []GoogleTypeLocalizedText                                     `json:"titles,omitempty"`
}
