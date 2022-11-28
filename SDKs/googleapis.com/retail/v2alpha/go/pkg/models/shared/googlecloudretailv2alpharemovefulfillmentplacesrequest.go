package shared

// GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest
// Request message for ProductService.RemoveFulfillmentPlaces method.
type GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest struct {
	AllowMissing *bool    `json:"allowMissing,omitempty"`
	PlaceIds     []string `json:"placeIds,omitempty"`
	RemoveTime   *string  `json:"removeTime,omitempty"`
	Type         *string  `json:"type,omitempty"`
}
