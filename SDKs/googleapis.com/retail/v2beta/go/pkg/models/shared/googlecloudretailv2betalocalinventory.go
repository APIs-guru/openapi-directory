package shared

type GoogleCloudRetailV2betaLocalInventory struct {
	Attributes       map[string]GoogleCloudRetailV2betaCustomAttribute `json:"attributes,omitempty"`
	FulfillmentTypes []string                                          `json:"fulfillmentTypes,omitempty"`
	PlaceID          *string                                           `json:"placeId,omitempty"`
	PriceInfo        *GoogleCloudRetailV2betaPriceInfo                 `json:"priceInfo,omitempty"`
}
