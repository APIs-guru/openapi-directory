package shared

type SecurityKey struct {
	PrivateKey         *string             `json:"privateKey"`
	PublicKey          *string             `json:"publicKey"`
	UniversalTwoFactor *UniversalTwoFactor `json:"universalTwoFactor"`
	WebAuthn           *WebAuthn           `json:"webAuthn"`
}
