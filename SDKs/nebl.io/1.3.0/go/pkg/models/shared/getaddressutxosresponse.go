package shared

type GetAddressUtxosResponse struct {
	Address       *string  `json:"address"`
	Amount        *float64 `json:"amount"`
	Confirmations *float64 `json:"confirmations"`
	ScriptPubKey  *string  `json:"scriptPubKey"`
	Ts            *float64 `json:"ts"`
	Txid          *string  `json:"txid"`
	Vout          *float64 `json:"vout"`
}
