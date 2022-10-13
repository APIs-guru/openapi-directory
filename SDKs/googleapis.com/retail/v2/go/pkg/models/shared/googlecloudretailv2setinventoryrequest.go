package shared

type GoogleCloudRetailV2SetInventoryRequest struct {
	AllowMissing *bool                       `json:"allowMissing"`
	Inventory    *GoogleCloudRetailV2Product `json:"inventory"`
	SetMask      *string                     `json:"setMask"`
	SetTime      *string                     `json:"setTime"`
}
