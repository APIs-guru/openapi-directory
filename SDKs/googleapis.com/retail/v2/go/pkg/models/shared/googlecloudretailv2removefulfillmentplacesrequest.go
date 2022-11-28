package shared

// GoogleCloudRetailV2RemoveFulfillmentPlacesRequest
// Request message for ProductService.RemoveFulfillmentPlaces method.
type GoogleCloudRetailV2RemoveFulfillmentPlacesRequest struct {
	AllowMissing *bool    `json:"allowMissing,omitempty"`
	PlaceIds     []string `json:"placeIds,omitempty"`
	RemoveTime   *string  `json:"removeTime,omitempty"`
	Type         *string  `json:"type,omitempty"`
}
