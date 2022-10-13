package shared

type OrdersRefundItemRequest struct {
	Items       []OrdersCustomBatchRequestEntryRefundItemItem    `json:"items"`
	OperationID *string                                          `json:"operationId"`
	Reason      *string                                          `json:"reason"`
	ReasonText  *string                                          `json:"reasonText"`
	Shipping    *OrdersCustomBatchRequestEntryRefundItemShipping `json:"shipping"`
}
