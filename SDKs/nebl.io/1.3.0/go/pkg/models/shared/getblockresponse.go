package shared



type GetBlockResponse struct {
    Bits *string `json:"bits,omitempty"`
    Confirmations *float64 `json:"confirmations,omitempty"`
    Difficulty *float64 `json:"difficulty,omitempty"`
    Hash *string `json:"hash,omitempty"`
    Height *float64 `json:"height,omitempty"`
    Merkleroot *string `json:"merkleroot,omitempty"`
    Nextblockhash *string `json:"nextblockhash,omitempty"`
    Nonce *float64 `json:"nonce,omitempty"`
    Previousblockhash *string `json:"previousblockhash,omitempty"`
    Reward *float64 `json:"reward,omitempty"`
    Size *float64 `json:"size,omitempty"`
    Time *float64 `json:"time,omitempty"`
    Tx []string `json:"tx,omitempty"`
    Version *float64 `json:"version,omitempty"`
    
}

