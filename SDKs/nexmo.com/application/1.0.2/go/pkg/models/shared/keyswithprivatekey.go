package shared



type KeysWithPrivateKey struct {
    PrivateKey *string `json:"private_key,omitempty"`
    PublicKey *string `json:"public_key,omitempty"`
    
}

