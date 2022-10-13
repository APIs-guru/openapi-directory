package shared

type RefundReason struct {
	Description *string `json:"description"`
	ReasonCode  *string `json:"reasonCode"`
}
