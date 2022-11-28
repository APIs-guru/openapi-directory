package shared

// GoogleCloudChannelV1PriceTier
// Defines price at resource tier level. For example, an offer with following definition : * Tier 1: Provide 25% discount for all seats between 1 and 25. * Tier 2: Provide 10% discount for all seats between 26 and 100. * Tier 3: Provide flat 15% discount for all seats above 100. Each of these tiers is represented as a PriceTier.
type GoogleCloudChannelV1PriceTier struct {
	FirstResource *int32                     `json:"firstResource,omitempty"`
	LastResource  *int32                     `json:"lastResource,omitempty"`
	Price         *GoogleCloudChannelV1Price `json:"price,omitempty"`
}
