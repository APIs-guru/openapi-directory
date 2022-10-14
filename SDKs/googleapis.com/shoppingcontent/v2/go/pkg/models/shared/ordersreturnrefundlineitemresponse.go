package shared

type OrdersReturnRefundLineItemResponse struct {
	ExecutionStatus *string `json:"executionStatus,omitempty"`
	Kind            *string `json:"kind,omitempty"`
}
