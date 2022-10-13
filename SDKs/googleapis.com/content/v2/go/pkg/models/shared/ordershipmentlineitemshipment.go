package shared

type OrderShipmentLineItemShipment struct {
	LineItemID *string `json:"lineItemId"`
	ProductID  *string `json:"productId"`
	Quantity   *int64  `json:"quantity"`
}
