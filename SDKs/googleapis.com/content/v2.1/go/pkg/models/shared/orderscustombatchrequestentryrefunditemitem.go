package shared

type OrdersCustomBatchRequestEntryRefundItemItem struct {
	Amount     *MonetaryAmount `json:"amount,omitempty"`
	FullRefund *bool           `json:"fullRefund,omitempty"`
	LineItemID *string         `json:"lineItemId,omitempty"`
	ProductID  *string         `json:"productId,omitempty"`
	Quantity   *int32          `json:"quantity,omitempty"`
}
