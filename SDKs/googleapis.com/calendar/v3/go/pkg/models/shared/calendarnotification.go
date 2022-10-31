package shared

type CalendarNotification struct {
	Method *string `json:"method,omitempty"`
	Type   *string `json:"type,omitempty"`
}
