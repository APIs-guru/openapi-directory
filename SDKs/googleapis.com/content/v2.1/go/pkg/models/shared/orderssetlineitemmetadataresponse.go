package shared

type OrdersSetLineItemMetadataResponse struct {
	ExecutionStatus *string `json:"executionStatus,omitempty"`
	Kind            *string `json:"kind,omitempty"`
}
