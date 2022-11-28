package shared

// ErrorObject
// An object for describing a single error that occurred during the processing of a request.
type ErrorObject struct {
	Field  *string `json:"field,omitempty"`
	Reason *string `json:"reason,omitempty"`
}
