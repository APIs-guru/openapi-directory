package shared

type GoogleCloudRetailV2betaSetInventoryRequest struct {
	AllowMissing *bool                           `json:"allowMissing"`
	Inventory    *GoogleCloudRetailV2betaProduct `json:"inventory"`
	SetMask      *string                         `json:"setMask"`
	SetTime      *string                         `json:"setTime"`
}
