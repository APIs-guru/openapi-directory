package shared

// DeviceCredential
// A server-stored device credential used for authentication.
type DeviceCredential struct {
	ExpirationTime *string              `json:"expirationTime,omitempty"`
	PublicKey      *PublicKeyCredential `json:"publicKey,omitempty"`
}
