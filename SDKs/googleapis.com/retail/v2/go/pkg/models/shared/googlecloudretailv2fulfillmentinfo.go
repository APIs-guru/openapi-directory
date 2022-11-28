package shared

// GoogleCloudRetailV2FulfillmentInfo
// Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods.
type GoogleCloudRetailV2FulfillmentInfo struct {
	PlaceIds []string `json:"placeIds,omitempty"`
	Type     *string  `json:"type,omitempty"`
}
