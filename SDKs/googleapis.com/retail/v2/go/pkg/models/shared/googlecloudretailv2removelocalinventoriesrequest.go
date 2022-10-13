package shared

type GoogleCloudRetailV2RemoveLocalInventoriesRequest struct {
	AllowMissing *bool    `json:"allowMissing"`
	PlaceIds     []string `json:"placeIds"`
	RemoveTime   *string  `json:"removeTime"`
}
