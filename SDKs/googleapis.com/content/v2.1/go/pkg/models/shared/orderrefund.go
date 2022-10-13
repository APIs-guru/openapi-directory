package shared

type OrderRefund struct {
	Actor        *string `json:"actor"`
	Amount       *Price  `json:"amount"`
	CreationDate *string `json:"creationDate"`
	Reason       *string `json:"reason"`
	ReasonText   *string `json:"reasonText"`
}
