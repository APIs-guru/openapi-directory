package shared



type KmsWrappedCryptoKey struct {
    CryptoKey *string `json:"cryptoKey,omitempty"`
    WrappedKey *string `json:"wrappedKey,omitempty"`
    
}

