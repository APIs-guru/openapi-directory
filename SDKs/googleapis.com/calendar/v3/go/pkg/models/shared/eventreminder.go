package shared

type EventReminder struct {
	Method  *string `json:"method,omitempty"`
	Minutes *int32  `json:"minutes,omitempty"`
}
