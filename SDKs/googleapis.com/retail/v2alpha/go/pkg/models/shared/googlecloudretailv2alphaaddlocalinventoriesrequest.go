package shared

type GoogleCloudRetailV2alphaAddLocalInventoriesRequest struct {
	AddMask          *string                                  `json:"addMask"`
	AddTime          *string                                  `json:"addTime"`
	AllowMissing     *bool                                    `json:"allowMissing"`
	LocalInventories []GoogleCloudRetailV2alphaLocalInventory `json:"localInventories"`
}
