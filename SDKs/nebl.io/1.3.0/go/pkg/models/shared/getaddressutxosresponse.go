package shared

type GetAddressUtxosResponse struct {
	Address       *string  `json:"address,omitempty"`
	Amount        *float64 `json:"amount,omitempty"`
	Confirmations *float64 `json:"confirmations,omitempty"`
	ScriptPubKey  *string  `json:"scriptPubKey,omitempty"`
	Ts            *float64 `json:"ts,omitempty"`
	Txid          *string  `json:"txid,omitempty"`
	Vout          *float64 `json:"vout,omitempty"`
}
