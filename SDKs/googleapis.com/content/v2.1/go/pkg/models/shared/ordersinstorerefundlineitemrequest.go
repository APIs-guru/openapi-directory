package shared

type OrdersInStoreRefundLineItemRequest struct {
	LineItemID  *string `json:"lineItemId,omitempty"`
	OperationID *string `json:"operationId,omitempty"`
	PriceAmount *Price  `json:"priceAmount,omitempty"`
	ProductID   *string `json:"productId,omitempty"`
	Quantity    *int64  `json:"quantity,omitempty"`
	Reason      *string `json:"reason,omitempty"`
	ReasonText  *string `json:"reasonText,omitempty"`
	TaxAmount   *Price  `json:"taxAmount,omitempty"`
}
