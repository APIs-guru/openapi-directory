package shared

type GoogleCloudRetailV2betaAddFulfillmentPlacesRequest struct {
	AddTime      *string  `json:"addTime"`
	AllowMissing *bool    `json:"allowMissing"`
	PlaceIds     []string `json:"placeIds"`
	Type         *string  `json:"type"`
}
