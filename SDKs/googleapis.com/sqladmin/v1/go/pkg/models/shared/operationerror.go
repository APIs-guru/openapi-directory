package shared

// OperationError
// Database instance operation error.
type OperationError struct {
	Code    *string `json:"code,omitempty"`
	Kind    *string `json:"kind,omitempty"`
	Message *string `json:"message,omitempty"`
}
