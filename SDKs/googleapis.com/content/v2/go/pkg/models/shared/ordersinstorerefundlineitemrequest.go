package shared

type OrdersInStoreRefundLineItemRequest struct {
	AmountPretax *Price  `json:"amountPretax,omitempty"`
	AmountTax    *Price  `json:"amountTax,omitempty"`
	LineItemID   *string `json:"lineItemId,omitempty"`
	OperationID  *string `json:"operationId,omitempty"`
	ProductID    *string `json:"productId,omitempty"`
	Quantity     *int64  `json:"quantity,omitempty"`
	Reason       *string `json:"reason,omitempty"`
	ReasonText   *string `json:"reasonText,omitempty"`
}
