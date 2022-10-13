package shared

type GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest struct {
	AllowMissing *bool    `json:"allowMissing"`
	PlaceIds     []string `json:"placeIds"`
	RemoveTime   *string  `json:"removeTime"`
}
