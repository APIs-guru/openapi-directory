package shared

// SSHPublicKey
// The SSH public key information associated with a Google account.
type SSHPublicKey struct {
	ExpirationTimeUsec *string `json:"expirationTimeUsec,omitempty"`
	Fingerprint        *string `json:"fingerprint,omitempty"`
	Key                *string `json:"key,omitempty"`
	Name               *string `json:"name,omitempty"`
}

// SSHPublicKeyInput
// The SSH public key information associated with a Google account.
type SSHPublicKeyInput struct {
	ExpirationTimeUsec *string `json:"expirationTimeUsec,omitempty"`
	Key                *string `json:"key,omitempty"`
}
