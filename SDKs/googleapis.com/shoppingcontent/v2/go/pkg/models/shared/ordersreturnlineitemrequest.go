package shared

type OrdersReturnLineItemRequest struct {
	LineItemID  *string `json:"lineItemId"`
	OperationID *string `json:"operationId"`
	ProductID   *string `json:"productId"`
	Quantity    *int64  `json:"quantity"`
	Reason      *string `json:"reason"`
	ReasonText  *string `json:"reasonText"`
}
