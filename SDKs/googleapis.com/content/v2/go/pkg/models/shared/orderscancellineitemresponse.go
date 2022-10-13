package shared

type OrdersCancelLineItemResponse struct {
	ExecutionStatus *string `json:"executionStatus"`
	Kind            *string `json:"kind"`
}
