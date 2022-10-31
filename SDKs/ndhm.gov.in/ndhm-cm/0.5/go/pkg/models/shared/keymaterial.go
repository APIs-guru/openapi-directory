package shared



type KeyMaterial struct {
    CryptoAlg string `json:"cryptoAlg"`
    Curve string `json:"curve"`
    DhPublicKey KeyObject `json:"dhPublicKey"`
    Nonce string `json:"nonce"`
    
}

