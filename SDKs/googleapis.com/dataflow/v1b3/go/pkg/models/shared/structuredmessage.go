package shared

type StructuredMessage struct {
	MessageKey  *string     `json:"messageKey,omitempty"`
	MessageText *string     `json:"messageText,omitempty"`
	Parameters  []Parameter `json:"parameters,omitempty"`
}
