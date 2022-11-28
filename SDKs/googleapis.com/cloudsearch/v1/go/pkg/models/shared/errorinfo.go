package shared

// ErrorInfo
// Error information about the response.
type ErrorInfo struct {
	ErrorMessages []ErrorMessage `json:"errorMessages,omitempty"`
}
