package shared

// GoogleCloudRetailV2betaLocalInventory
// The inventory information at a place (e.g. a store) identified by a place ID.
type GoogleCloudRetailV2betaLocalInventory struct {
	Attributes       map[string]GoogleCloudRetailV2betaCustomAttribute `json:"attributes,omitempty"`
	FulfillmentTypes []string                                          `json:"fulfillmentTypes,omitempty"`
	PlaceID          *string                                           `json:"placeId,omitempty"`
	PriceInfo        *GoogleCloudRetailV2betaPriceInfo                 `json:"priceInfo,omitempty"`
}
