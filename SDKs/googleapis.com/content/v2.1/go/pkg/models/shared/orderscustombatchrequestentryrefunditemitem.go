package shared

type OrdersCustomBatchRequestEntryRefundItemItem struct {
	Amount     *MonetaryAmount `json:"amount"`
	FullRefund *bool           `json:"fullRefund"`
	LineItemID *string         `json:"lineItemId"`
	ProductID  *string         `json:"productId"`
	Quantity   *int32          `json:"quantity"`
}
