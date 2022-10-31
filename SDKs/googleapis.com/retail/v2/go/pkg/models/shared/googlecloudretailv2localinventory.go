package shared



type GoogleCloudRetailV2LocalInventory struct {
    Attributes map[string]GoogleCloudRetailV2CustomAttribute `json:"attributes,omitempty"`
    FulfillmentTypes []string `json:"fulfillmentTypes,omitempty"`
    PlaceID *string `json:"placeId,omitempty"`
    PriceInfo *GoogleCloudRetailV2PriceInfo `json:"priceInfo,omitempty"`
    
}

