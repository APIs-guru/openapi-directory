package shared

// Error
// Represent a user-facing Error.
type Error struct {
	Details   map[string]string `json:"details,omitempty"`
	ErrorTime *string           `json:"errorTime,omitempty"`
	ErrorUUID *string           `json:"errorUuid,omitempty"`
	Message   *string           `json:"message,omitempty"`
	Reason    *string           `json:"reason,omitempty"`
}
