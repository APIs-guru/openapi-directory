package shared



type DateShiftConfig struct {
    CryptoKey *string `json:"cryptoKey,omitempty"`
    KmsWrapped *KmsWrappedCryptoKey `json:"kmsWrapped,omitempty"`
    
}

