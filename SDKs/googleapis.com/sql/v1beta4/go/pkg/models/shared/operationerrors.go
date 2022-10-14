package shared

type OperationErrors struct {
	Errors []OperationError `json:"errors,omitempty"`
	Kind   *string          `json:"kind,omitempty"`
}
