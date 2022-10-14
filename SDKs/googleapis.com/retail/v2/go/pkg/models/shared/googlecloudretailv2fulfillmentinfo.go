package shared

type GoogleCloudRetailV2FulfillmentInfo struct {
	PlaceIds []string `json:"placeIds,omitempty"`
	Type     *string  `json:"type,omitempty"`
}
