package shared

type GoogleCloudRetailV2AddFulfillmentPlacesRequest struct {
	AddTime      *string  `json:"addTime,omitempty"`
	AllowMissing *bool    `json:"allowMissing,omitempty"`
	PlaceIds     []string `json:"placeIds,omitempty"`
	Type         *string  `json:"type,omitempty"`
}
