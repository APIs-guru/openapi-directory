package shared

type GoogleCloudRetailV2AddFulfillmentPlacesRequest struct {
	AddTime      *string  `json:"addTime"`
	AllowMissing *bool    `json:"allowMissing"`
	PlaceIds     []string `json:"placeIds"`
	Type         *string  `json:"type"`
}
