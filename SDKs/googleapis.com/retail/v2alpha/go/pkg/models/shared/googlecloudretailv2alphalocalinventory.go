package shared

type GoogleCloudRetailV2alphaLocalInventory struct {
	Attributes       map[string]GoogleCloudRetailV2alphaCustomAttribute `json:"attributes"`
	FulfillmentTypes []string                                           `json:"fulfillmentTypes"`
	PlaceID          *string                                            `json:"placeId"`
	PriceInfo        *GoogleCloudRetailV2alphaPriceInfo                 `json:"priceInfo"`
}
