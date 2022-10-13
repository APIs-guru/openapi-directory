package shared

type GoogleCloudRetailV2LocalInventory struct {
	Attributes       map[string]GoogleCloudRetailV2CustomAttribute `json:"attributes"`
	FulfillmentTypes []string                                      `json:"fulfillmentTypes"`
	PlaceID          *string                                       `json:"placeId"`
	PriceInfo        *GoogleCloudRetailV2PriceInfo                 `json:"priceInfo"`
}
