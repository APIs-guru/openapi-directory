package shared

type OrdersReturnRefundLineItemRequest struct {
	AmountPretax *Price  `json:"amountPretax"`
	AmountTax    *Price  `json:"amountTax"`
	LineItemID   *string `json:"lineItemId"`
	OperationID  *string `json:"operationId"`
	ProductID    *string `json:"productId"`
	Quantity     *int64  `json:"quantity"`
	Reason       *string `json:"reason"`
	ReasonText   *string `json:"reasonText"`
}
