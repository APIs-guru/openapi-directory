package shared

type GoogleCloudRetailV2RemoveFulfillmentPlacesRequest struct {
	AllowMissing *bool    `json:"allowMissing"`
	PlaceIds     []string `json:"placeIds"`
	RemoveTime   *string  `json:"removeTime"`
	Type         *string  `json:"type"`
}
