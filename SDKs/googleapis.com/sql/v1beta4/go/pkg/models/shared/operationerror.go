package shared

type OperationError struct {
	Code    *string `json:"code"`
	Kind    *string `json:"kind"`
	Message *string `json:"message"`
}
