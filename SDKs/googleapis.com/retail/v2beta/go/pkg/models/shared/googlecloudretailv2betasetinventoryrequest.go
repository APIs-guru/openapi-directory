package shared

type GoogleCloudRetailV2betaSetInventoryRequest struct {
	AllowMissing *bool                           `json:"allowMissing,omitempty"`
	Inventory    *GoogleCloudRetailV2betaProduct `json:"inventory,omitempty"`
	SetMask      *string                         `json:"setMask,omitempty"`
	SetTime      *string                         `json:"setTime,omitempty"`
}
