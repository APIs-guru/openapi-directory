package shared

type OrderRefund struct {
	Actor        *string `json:"actor,omitempty"`
	Amount       *Price  `json:"amount,omitempty"`
	CreationDate *string `json:"creationDate,omitempty"`
	Reason       *string `json:"reason,omitempty"`
	ReasonText   *string `json:"reasonText,omitempty"`
}
