package shared

type GetBlockResponse struct {
	Bits              *string  `json:"bits"`
	Confirmations     *float64 `json:"confirmations"`
	Difficulty        *float64 `json:"difficulty"`
	Hash              *string  `json:"hash"`
	Height            *float64 `json:"height"`
	Merkleroot        *string  `json:"merkleroot"`
	Nextblockhash     *string  `json:"nextblockhash"`
	Nonce             *float64 `json:"nonce"`
	Previousblockhash *string  `json:"previousblockhash"`
	Reward            *float64 `json:"reward"`
	Size              *float64 `json:"size"`
	Time              *float64 `json:"time"`
	Tx                []string `json:"tx"`
	Version           *float64 `json:"version"`
}
