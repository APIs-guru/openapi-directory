package shared

type OrdersUpdateLineItemShippingDetailsResponse struct {
	ExecutionStatus *string `json:"executionStatus,omitempty"`
	Kind            *string `json:"kind,omitempty"`
}
