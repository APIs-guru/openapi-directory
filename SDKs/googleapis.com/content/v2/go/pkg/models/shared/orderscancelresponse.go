package shared

type OrdersCancelResponse struct {
	ExecutionStatus *string `json:"executionStatus"`
	Kind            *string `json:"kind"`
}
