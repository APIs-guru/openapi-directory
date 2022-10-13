package shared

type OrdersRefundRequest struct {
	Amount       *Price  `json:"amount"`
	AmountPretax *Price  `json:"amountPretax"`
	AmountTax    *Price  `json:"amountTax"`
	OperationID  *string `json:"operationId"`
	Reason       *string `json:"reason"`
	ReasonText   *string `json:"reasonText"`
}
