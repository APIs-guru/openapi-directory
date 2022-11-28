package shared

// GoogleCloudRetailV2betaFulfillmentInfo
// Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods.
type GoogleCloudRetailV2betaFulfillmentInfo struct {
	PlaceIds []string `json:"placeIds,omitempty"`
	Type     *string  `json:"type,omitempty"`
}
