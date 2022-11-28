package shared

// SecurityKey
// The credential information for a Google registered security key.
type SecurityKey struct {
	PrivateKey         *string             `json:"privateKey,omitempty"`
	PublicKey          *string             `json:"publicKey,omitempty"`
	UniversalTwoFactor *UniversalTwoFactor `json:"universalTwoFactor,omitempty"`
	WebAuthn           *WebAuthn           `json:"webAuthn,omitempty"`
}
