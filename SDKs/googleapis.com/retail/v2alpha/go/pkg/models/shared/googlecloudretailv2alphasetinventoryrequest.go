package shared

// GoogleCloudRetailV2alphaSetInventoryRequestInput
// Request message for ProductService.SetInventory method.
type GoogleCloudRetailV2alphaSetInventoryRequestInput struct {
	AllowMissing *bool                                 `json:"allowMissing,omitempty"`
	Inventory    *GoogleCloudRetailV2alphaProductInput `json:"inventory,omitempty"`
	SetMask      *string                               `json:"setMask,omitempty"`
	SetTime      *string                               `json:"setTime,omitempty"`
}
