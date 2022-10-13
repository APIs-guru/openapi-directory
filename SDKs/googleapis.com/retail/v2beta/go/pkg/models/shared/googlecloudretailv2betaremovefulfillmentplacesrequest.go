package shared

type GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest struct {
	AllowMissing *bool    `json:"allowMissing"`
	PlaceIds     []string `json:"placeIds"`
	RemoveTime   *string  `json:"removeTime"`
	Type         *string  `json:"type"`
}
