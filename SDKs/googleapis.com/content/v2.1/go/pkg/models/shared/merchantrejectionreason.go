package shared

type MerchantRejectionReason struct {
	Description *string `json:"description"`
	ReasonCode  *string `json:"reasonCode"`
}
