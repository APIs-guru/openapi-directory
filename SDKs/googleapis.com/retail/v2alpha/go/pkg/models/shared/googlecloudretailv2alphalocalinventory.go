package shared

type GoogleCloudRetailV2alphaLocalInventory struct {
	Attributes       map[string]GoogleCloudRetailV2alphaCustomAttribute `json:"attributes,omitempty"`
	FulfillmentTypes []string                                           `json:"fulfillmentTypes,omitempty"`
	PlaceID          *string                                            `json:"placeId,omitempty"`
	PriceInfo        *GoogleCloudRetailV2alphaPriceInfo                 `json:"priceInfo,omitempty"`
}
