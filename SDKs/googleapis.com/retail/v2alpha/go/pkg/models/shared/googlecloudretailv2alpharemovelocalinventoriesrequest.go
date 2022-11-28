package shared

// GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest
// Request message for ProductService.RemoveLocalInventories method.
type GoogleCloudRetailV2alphaRemoveLocalInventoriesRequest struct {
	AllowMissing *bool    `json:"allowMissing,omitempty"`
	PlaceIds     []string `json:"placeIds,omitempty"`
	RemoveTime   *string  `json:"removeTime,omitempty"`
}
