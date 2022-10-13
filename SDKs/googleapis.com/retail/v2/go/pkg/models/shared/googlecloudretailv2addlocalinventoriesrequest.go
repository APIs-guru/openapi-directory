package shared

type GoogleCloudRetailV2AddLocalInventoriesRequest struct {
	AddMask          *string                             `json:"addMask"`
	AddTime          *string                             `json:"addTime"`
	AllowMissing     *bool                               `json:"allowMissing"`
	LocalInventories []GoogleCloudRetailV2LocalInventory `json:"localInventories"`
}
