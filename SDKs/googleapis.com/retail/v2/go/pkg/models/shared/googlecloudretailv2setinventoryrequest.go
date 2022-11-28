package shared

// GoogleCloudRetailV2SetInventoryRequestInput
// Request message for ProductService.SetInventory method.
type GoogleCloudRetailV2SetInventoryRequestInput struct {
	AllowMissing *bool                            `json:"allowMissing,omitempty"`
	Inventory    *GoogleCloudRetailV2ProductInput `json:"inventory,omitempty"`
	SetMask      *string                          `json:"setMask,omitempty"`
	SetTime      *string                          `json:"setTime,omitempty"`
}
