package shared

type OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails struct {
	DeliverByDate *string `json:"deliverByDate"`
	LineItemID    *string `json:"lineItemId"`
	ProductID     *string `json:"productId"`
	ShipByDate    *string `json:"shipByDate"`
}
