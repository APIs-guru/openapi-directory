package shared

type OrdersRefundItemRequest struct {
	Items       []OrdersCustomBatchRequestEntryRefundItemItem    `json:"items,omitempty"`
	OperationID *string                                          `json:"operationId,omitempty"`
	Reason      *string                                          `json:"reason,omitempty"`
	ReasonText  *string                                          `json:"reasonText,omitempty"`
	Shipping    *OrdersCustomBatchRequestEntryRefundItemShipping `json:"shipping,omitempty"`
}
