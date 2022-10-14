package shared

type OrdersReturnLineItemResponse struct {
	ExecutionStatus *string `json:"executionStatus,omitempty"`
	Kind            *string `json:"kind,omitempty"`
}
