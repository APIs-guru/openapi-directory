package shared



type CryptoHashConfig struct {
    CryptoKey *string `json:"cryptoKey,omitempty"`
    KmsWrapped *KmsWrappedCryptoKey `json:"kmsWrapped,omitempty"`
    
}

