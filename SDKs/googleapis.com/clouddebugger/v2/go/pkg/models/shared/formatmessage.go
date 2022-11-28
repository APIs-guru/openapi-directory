package shared

// FormatMessage
// Represents a message with parameters.
type FormatMessage struct {
	Format     *string  `json:"format,omitempty"`
	Parameters []string `json:"parameters,omitempty"`
}
