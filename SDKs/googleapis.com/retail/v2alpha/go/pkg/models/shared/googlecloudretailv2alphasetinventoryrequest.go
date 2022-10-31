package shared



type GoogleCloudRetailV2alphaSetInventoryRequest struct {
    AllowMissing *bool `json:"allowMissing,omitempty"`
    Inventory *GoogleCloudRetailV2alphaProduct `json:"inventory,omitempty"`
    SetMask *string `json:"setMask,omitempty"`
    SetTime *string `json:"setTime,omitempty"`
    
}

