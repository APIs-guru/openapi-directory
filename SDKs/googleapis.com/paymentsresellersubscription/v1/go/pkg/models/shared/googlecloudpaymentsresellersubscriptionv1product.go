package shared

type GoogleCloudPaymentsResellerSubscriptionV1Product struct {
	Name                             *string                                                       `json:"name"`
	PriceConfigs                     []GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig `json:"priceConfigs"`
	RegionCodes                      []string                                                      `json:"regionCodes"`
	SubscriptionBillingCycleDuration *GoogleCloudPaymentsResellerSubscriptionV1Duration            `json:"subscriptionBillingCycleDuration"`
	Titles                           []GoogleTypeLocalizedText                                     `json:"titles"`
}
