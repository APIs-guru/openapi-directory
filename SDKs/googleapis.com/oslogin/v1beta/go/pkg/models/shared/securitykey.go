package shared



type SecurityKey struct {
    PrivateKey *string `json:"privateKey,omitempty"`
    PublicKey *string `json:"publicKey,omitempty"`
    UniversalTwoFactor *UniversalTwoFactor `json:"universalTwoFactor,omitempty"`
    WebAuthn *WebAuthn `json:"webAuthn,omitempty"`
    
}

