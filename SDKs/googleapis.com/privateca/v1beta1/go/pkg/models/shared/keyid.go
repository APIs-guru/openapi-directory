package shared

// KeyID
// A KeyId identifies a specific public key, usually by hashing the public key.
type KeyID struct {
	KeyID *string `json:"keyId,omitempty"`
}
