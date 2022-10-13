package shared

type OrdersInStoreRefundLineItemRequest struct {
	LineItemID  *string `json:"lineItemId"`
	OperationID *string `json:"operationId"`
	PriceAmount *Price  `json:"priceAmount"`
	ProductID   *string `json:"productId"`
	Quantity    *int64  `json:"quantity"`
	Reason      *string `json:"reason"`
	ReasonText  *string `json:"reasonText"`
	TaxAmount   *Price  `json:"taxAmount"`
}
