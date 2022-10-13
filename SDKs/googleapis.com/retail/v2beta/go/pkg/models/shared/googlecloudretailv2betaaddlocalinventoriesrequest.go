package shared

type GoogleCloudRetailV2betaAddLocalInventoriesRequest struct {
	AddMask          *string                                 `json:"addMask"`
	AddTime          *string                                 `json:"addTime"`
	AllowMissing     *bool                                   `json:"allowMissing"`
	LocalInventories []GoogleCloudRetailV2betaLocalInventory `json:"localInventories"`
}
