package shared

type GoogleCloudRetailV2alphaRemoveFulfillmentPlacesRequest struct {
	AllowMissing *bool    `json:"allowMissing"`
	PlaceIds     []string `json:"placeIds"`
	RemoveTime   *string  `json:"removeTime"`
	Type         *string  `json:"type"`
}
