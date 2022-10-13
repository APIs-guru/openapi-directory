package shared

type GoogleCloudChannelV1Offer struct {
	Constraints          *GoogleCloudChannelV1Constraints          `json:"constraints"`
	EndTime              *string                                   `json:"endTime"`
	MarketingInfo        *GoogleCloudChannelV1MarketingInfo        `json:"marketingInfo"`
	Name                 *string                                   `json:"name"`
	ParameterDefinitions []GoogleCloudChannelV1ParameterDefinition `json:"parameterDefinitions"`
	Plan                 *GoogleCloudChannelV1Plan                 `json:"plan"`
	PriceByResources     []GoogleCloudChannelV1PriceByResource     `json:"priceByResources"`
	Sku                  *GoogleCloudChannelV1Sku                  `json:"sku"`
	StartTime            *string                                   `json:"startTime"`
}
