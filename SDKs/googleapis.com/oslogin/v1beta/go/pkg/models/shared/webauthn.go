package shared

// WebAuthn
// Security key information specific to the Web Authentication protocol.
type WebAuthn struct {
	RpID *string `json:"rpId,omitempty"`
}
