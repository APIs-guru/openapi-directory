package shared

type OrdersRefundRequest struct {
	Amount       *Price  `json:"amount,omitempty"`
	AmountPretax *Price  `json:"amountPretax,omitempty"`
	AmountTax    *Price  `json:"amountTax,omitempty"`
	OperationID  *string `json:"operationId,omitempty"`
	Reason       *string `json:"reason,omitempty"`
	ReasonText   *string `json:"reasonText,omitempty"`
}
