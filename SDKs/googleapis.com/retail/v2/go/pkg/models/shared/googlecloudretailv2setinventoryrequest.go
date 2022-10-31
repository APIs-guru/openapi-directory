package shared



type GoogleCloudRetailV2SetInventoryRequest struct {
    AllowMissing *bool `json:"allowMissing,omitempty"`
    Inventory *GoogleCloudRetailV2Product `json:"inventory,omitempty"`
    SetMask *string `json:"setMask,omitempty"`
    SetTime *string `json:"setTime,omitempty"`
    
}

