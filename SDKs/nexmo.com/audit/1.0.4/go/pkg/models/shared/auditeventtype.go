package shared

type AuditEventType struct {
	Description *string         `json:"description,omitempty"`
	Type        *EventTypesEnum `json:"type,omitempty"`
}
