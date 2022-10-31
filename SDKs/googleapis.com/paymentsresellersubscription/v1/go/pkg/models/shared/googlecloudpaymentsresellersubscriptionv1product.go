package shared



type GoogleCloudPaymentsResellerSubscriptionV1Product struct {
    Name *string `json:"name,omitempty"`
    PriceConfigs []GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig `json:"priceConfigs,omitempty"`
    RegionCodes []string `json:"regionCodes,omitempty"`
    SubscriptionBillingCycleDuration *GoogleCloudPaymentsResellerSubscriptionV1Duration `json:"subscriptionBillingCycleDuration,omitempty"`
    Titles []GoogleTypeLocalizedText `json:"titles,omitempty"`
    
}

