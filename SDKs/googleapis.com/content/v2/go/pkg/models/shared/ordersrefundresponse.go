package shared

type OrdersRefundResponse struct {
	ExecutionStatus *string `json:"executionStatus"`
	Kind            *string `json:"kind"`
}
