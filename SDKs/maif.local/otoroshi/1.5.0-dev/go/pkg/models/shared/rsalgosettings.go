package shared



type RsAlgoSettings struct {
    PrivateKey *string `json:"privateKey,omitempty"`
    PublicKey string `json:"publicKey"`
    Size int32 `json:"size"`
    Type string `json:"type"`
    
}

