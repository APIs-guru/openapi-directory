package shared

// OperationErrors
// Database instance operation errors list wrapper.
type OperationErrors struct {
	Errors []OperationError `json:"errors,omitempty"`
	Kind   *string          `json:"kind,omitempty"`
}
