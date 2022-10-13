package shared

type CallFunctionResponse struct {
	Error       *string `json:"error"`
	ExecutionID *string `json:"executionId"`
	Result      *string `json:"result"`
}
