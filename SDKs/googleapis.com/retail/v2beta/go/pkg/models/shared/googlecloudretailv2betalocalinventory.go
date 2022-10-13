package shared

type GoogleCloudRetailV2betaLocalInventory struct {
	Attributes       map[string]GoogleCloudRetailV2betaCustomAttribute `json:"attributes"`
	FulfillmentTypes []string                                          `json:"fulfillmentTypes"`
	PlaceID          *string                                           `json:"placeId"`
	PriceInfo        *GoogleCloudRetailV2betaPriceInfo                 `json:"priceInfo"`
}
