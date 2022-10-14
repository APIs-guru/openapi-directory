package shared

type OrdersUpdateLineItemShippingDetailsRequest struct {
	DeliverByDate *string `json:"deliverByDate,omitempty"`
	LineItemID    *string `json:"lineItemId,omitempty"`
	OperationID   *string `json:"operationId,omitempty"`
	ProductID     *string `json:"productId,omitempty"`
	ShipByDate    *string `json:"shipByDate,omitempty"`
}
