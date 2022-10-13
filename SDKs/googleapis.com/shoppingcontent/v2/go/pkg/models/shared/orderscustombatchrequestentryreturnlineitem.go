package shared

type OrdersCustomBatchRequestEntryReturnLineItem struct {
	LineItemID *string `json:"lineItemId"`
	ProductID  *string `json:"productId"`
	Quantity   *int64  `json:"quantity"`
	Reason     *string `json:"reason"`
	ReasonText *string `json:"reasonText"`
}
