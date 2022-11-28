package shared

// StructuredMessage
// A rich message format, including a human readable string, a key for identifying the message, and structured data associated with the message for programmatic consumption.
type StructuredMessage struct {
	MessageKey  *string     `json:"messageKey,omitempty"`
	MessageText *string     `json:"messageText,omitempty"`
	Parameters  []Parameter `json:"parameters,omitempty"`
}
