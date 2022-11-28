package shared

// GoogleCloudRetailV2betaRemoveLocalInventoriesRequest
// Request message for ProductService.RemoveLocalInventories method.
type GoogleCloudRetailV2betaRemoveLocalInventoriesRequest struct {
	AllowMissing *bool    `json:"allowMissing,omitempty"`
	PlaceIds     []string `json:"placeIds,omitempty"`
	RemoveTime   *string  `json:"removeTime,omitempty"`
}
