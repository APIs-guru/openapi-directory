package shared



type BurnTokenResponse struct {
    MultisigOutputs []float64 `json:"multisigOutputs,omitempty"`
    Ntp1OutputIndexes []float64 `json:"ntp1OutputIndexes,omitempty"`
    TxHex *string `json:"txHex,omitempty"`
    
}

