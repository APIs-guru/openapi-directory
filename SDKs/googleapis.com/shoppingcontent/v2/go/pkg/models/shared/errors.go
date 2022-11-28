package shared

// Errors
// A list of errors returned by a failed batch entry.
type Errors struct {
	Code    *int64  `json:"code,omitempty"`
	Errors  []Error `json:"errors,omitempty"`
	Message *string `json:"message,omitempty"`
}
