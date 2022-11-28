package shared

// RuntimeError
// Message containing a runtime error config.
type RuntimeError struct {
	Code    *string `json:"code,omitempty"`
	Message *string `json:"message,omitempty"`
}
