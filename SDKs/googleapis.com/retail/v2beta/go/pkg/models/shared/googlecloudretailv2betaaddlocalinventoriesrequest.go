package shared

type GoogleCloudRetailV2betaAddLocalInventoriesRequest struct {
	AddMask          *string                                 `json:"addMask,omitempty"`
	AddTime          *string                                 `json:"addTime,omitempty"`
	AllowMissing     *bool                                   `json:"allowMissing,omitempty"`
	LocalInventories []GoogleCloudRetailV2betaLocalInventory `json:"localInventories,omitempty"`
}
