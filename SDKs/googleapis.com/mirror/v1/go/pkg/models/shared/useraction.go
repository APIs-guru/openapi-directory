package shared

// UserAction
// Represents an action taken by the user that triggered a notification.
type UserAction struct {
	Payload *string `json:"payload,omitempty"`
	Type    *string `json:"type,omitempty"`
}
