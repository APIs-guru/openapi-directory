package shared

type GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest struct {
	AddTime      *string  `json:"addTime"`
	AllowMissing *bool    `json:"allowMissing"`
	PlaceIds     []string `json:"placeIds"`
	Type         *string  `json:"type"`
}
