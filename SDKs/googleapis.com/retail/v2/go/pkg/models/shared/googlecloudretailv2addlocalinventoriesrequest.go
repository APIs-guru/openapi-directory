package shared



type GoogleCloudRetailV2AddLocalInventoriesRequest struct {
    AddMask *string `json:"addMask,omitempty"`
    AddTime *string `json:"addTime,omitempty"`
    AllowMissing *bool `json:"allowMissing,omitempty"`
    LocalInventories []GoogleCloudRetailV2LocalInventory `json:"localInventories,omitempty"`
    
}

