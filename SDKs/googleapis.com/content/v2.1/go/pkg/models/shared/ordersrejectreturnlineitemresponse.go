package shared

type OrdersRejectReturnLineItemResponse struct {
	ExecutionStatus *string `json:"executionStatus,omitempty"`
	Kind            *string `json:"kind,omitempty"`
}
