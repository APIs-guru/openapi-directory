package shared

type OrdersUpdateLineItemShippingDetailsRequest struct {
	DeliverByDate *string `json:"deliverByDate"`
	LineItemID    *string `json:"lineItemId"`
	OperationID   *string `json:"operationId"`
	ProductID     *string `json:"productId"`
	ShipByDate    *string `json:"shipByDate"`
}
