package shared

// ErrorMessage
// Error message per source response.
type ErrorMessage struct {
	ErrorMessage *string `json:"errorMessage,omitempty"`
	Source       *Source `json:"source,omitempty"`
}
