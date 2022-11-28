package shared

// GoogleCloudRetailV2alphaAddLocalInventoriesRequest
// Request message for ProductService.AddLocalInventories method.
type GoogleCloudRetailV2alphaAddLocalInventoriesRequest struct {
	AddMask          *string                                  `json:"addMask,omitempty"`
	AddTime          *string                                  `json:"addTime,omitempty"`
	AllowMissing     *bool                                    `json:"allowMissing,omitempty"`
	LocalInventories []GoogleCloudRetailV2alphaLocalInventory `json:"localInventories,omitempty"`
}
