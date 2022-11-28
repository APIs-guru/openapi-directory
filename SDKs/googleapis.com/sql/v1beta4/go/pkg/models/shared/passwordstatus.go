package shared

// PasswordStatus
// Read-only password status.
type PasswordStatus struct {
	Locked                 *bool   `json:"locked,omitempty"`
	PasswordExpirationTime *string `json:"passwordExpirationTime,omitempty"`
}
