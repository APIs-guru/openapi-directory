package shared

type OperationErrors struct {
	Errors []OperationError `json:"errors"`
	Kind   *string          `json:"kind"`
}
