package shared



type SSHPublicKey struct {
    ExpirationTimeUsec *string `json:"expirationTimeUsec,omitempty"`
    Fingerprint *string `json:"fingerprint,omitempty"`
    Key *string `json:"key,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

