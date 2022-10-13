package shared

type AuditEventType struct {
	Description *string         `json:"description"`
	Type        *EventTypesEnum `json:"type"`
}
