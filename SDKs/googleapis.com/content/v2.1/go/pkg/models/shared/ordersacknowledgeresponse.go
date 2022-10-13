package shared

type OrdersAcknowledgeResponse struct {
	ExecutionStatus *string `json:"executionStatus"`
	Kind            *string `json:"kind"`
}
