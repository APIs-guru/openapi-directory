package shared

// GoogleCloudChannelV1Offer
// Represents an offer made to resellers for purchase. An offer is associated with a Sku, has a plan for payment, a price, and defines the constraints for buying.
type GoogleCloudChannelV1Offer struct {
	Constraints          *GoogleCloudChannelV1Constraints          `json:"constraints,omitempty"`
	DealCode             *string                                   `json:"dealCode,omitempty"`
	EndTime              *string                                   `json:"endTime,omitempty"`
	MarketingInfo        *GoogleCloudChannelV1MarketingInfo        `json:"marketingInfo,omitempty"`
	Name                 *string                                   `json:"name,omitempty"`
	ParameterDefinitions []GoogleCloudChannelV1ParameterDefinition `json:"parameterDefinitions,omitempty"`
	Plan                 *GoogleCloudChannelV1Plan                 `json:"plan,omitempty"`
	PriceByResources     []GoogleCloudChannelV1PriceByResource     `json:"priceByResources,omitempty"`
	Sku                  *GoogleCloudChannelV1Sku                  `json:"sku,omitempty"`
	StartTime            *string                                   `json:"startTime,omitempty"`
}
