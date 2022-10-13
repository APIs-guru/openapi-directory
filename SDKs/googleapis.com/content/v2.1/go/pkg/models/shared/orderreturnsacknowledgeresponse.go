package shared

type OrderreturnsAcknowledgeResponse struct {
	ExecutionStatus *string `json:"executionStatus"`
	Kind            *string `json:"kind"`
}
