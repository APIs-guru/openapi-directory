package shared

// GoogleCloudRetailV2RemoveLocalInventoriesRequest
// Request message for ProductService.RemoveLocalInventories method.
type GoogleCloudRetailV2RemoveLocalInventoriesRequest struct {
	AllowMissing *bool    `json:"allowMissing,omitempty"`
	PlaceIds     []string `json:"placeIds,omitempty"`
	RemoveTime   *string  `json:"removeTime,omitempty"`
}
