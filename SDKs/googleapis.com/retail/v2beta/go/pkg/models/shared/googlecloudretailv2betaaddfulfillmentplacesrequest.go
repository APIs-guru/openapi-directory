package shared

// GoogleCloudRetailV2betaAddFulfillmentPlacesRequest
// Request message for ProductService.AddFulfillmentPlaces method.
type GoogleCloudRetailV2betaAddFulfillmentPlacesRequest struct {
	AddTime      *string  `json:"addTime,omitempty"`
	AllowMissing *bool    `json:"allowMissing,omitempty"`
	PlaceIds     []string `json:"placeIds,omitempty"`
	Type         *string  `json:"type,omitempty"`
}
