package shared

// StatusCause
// StatusCause provides more information about an api.Status failure, including cases when multiple errors are encountered.
type StatusCause struct {
	Field   *string `json:"field,omitempty"`
	Message *string `json:"message,omitempty"`
	Reason  *string `json:"reason,omitempty"`
}
