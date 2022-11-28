package shared

// GoogleCloudRetailV2alphaLocalInventory
// The inventory information at a place (e.g. a store) identified by a place ID.
type GoogleCloudRetailV2alphaLocalInventory struct {
	Attributes       map[string]GoogleCloudRetailV2alphaCustomAttribute `json:"attributes,omitempty"`
	FulfillmentTypes []string                                           `json:"fulfillmentTypes,omitempty"`
	PlaceID          *string                                            `json:"placeId,omitempty"`
	PriceInfo        *GoogleCloudRetailV2alphaPriceInfo                 `json:"priceInfo,omitempty"`
}
