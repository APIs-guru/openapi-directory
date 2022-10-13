package shared

type SSHPublicKey struct {
	ExpirationTimeUsec *string `json:"expirationTimeUsec"`
	Fingerprint        *string `json:"fingerprint"`
	Key                *string `json:"key"`
	Name               *string `json:"name"`
}
