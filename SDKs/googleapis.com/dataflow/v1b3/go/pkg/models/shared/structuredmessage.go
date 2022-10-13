package shared

type StructuredMessage struct {
	MessageKey  *string     `json:"messageKey"`
	MessageText *string     `json:"messageText"`
	Parameters  []Parameter `json:"parameters"`
}
