package shared

type BurnTokenResponse struct {
	MultisigOutputs   []float64 `json:"multisigOutputs"`
	Ntp1OutputIndexes []float64 `json:"ntp1OutputIndexes"`
	TxHex             *string   `json:"txHex"`
}
