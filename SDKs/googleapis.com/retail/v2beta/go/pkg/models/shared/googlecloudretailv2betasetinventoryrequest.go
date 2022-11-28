package shared

// GoogleCloudRetailV2betaSetInventoryRequestInput
// Request message for ProductService.SetInventory method.
type GoogleCloudRetailV2betaSetInventoryRequestInput struct {
	AllowMissing *bool                                `json:"allowMissing,omitempty"`
	Inventory    *GoogleCloudRetailV2betaProductInput `json:"inventory,omitempty"`
	SetMask      *string                              `json:"setMask,omitempty"`
	SetTime      *string                              `json:"setTime,omitempty"`
}
