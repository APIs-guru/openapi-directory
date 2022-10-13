package shared

type GoogleCloudRetailV2alphaSetInventoryRequest struct {
	AllowMissing *bool                            `json:"allowMissing"`
	Inventory    *GoogleCloudRetailV2alphaProduct `json:"inventory"`
	SetMask      *string                          `json:"setMask"`
	SetTime      *string                          `json:"setTime"`
}
