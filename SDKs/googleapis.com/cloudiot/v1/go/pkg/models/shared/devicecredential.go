package shared



type DeviceCredential struct {
    ExpirationTime *string `json:"expirationTime,omitempty"`
    PublicKey *PublicKeyCredential `json:"publicKey,omitempty"`
    
}

