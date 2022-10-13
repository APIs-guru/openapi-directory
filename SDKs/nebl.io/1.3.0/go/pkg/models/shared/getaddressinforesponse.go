package shared

type GetAddressInfoResponseUtxosTokens struct {
	AggregationPolicy *string  `json:"aggregationPolicy"`
	Amount            *float64 `json:"amount"`
	Divisibility      *float64 `json:"divisibility"`
	IssueTxid         *string  `json:"issueTxid"`
	LockStatus        *bool    `json:"lockStatus"`
	TokenID           *string  `json:"tokenId"`
}

type GetAddressInfoResponseUtxos struct {
	Blockheight  *float64                            `json:"blockheight"`
	Blocktime    *float64                            `json:"blocktime"`
	Index        *float64                            `json:"index"`
	ScriptPubKey map[string]interface{}              `json:"scriptPubKey"`
	Tokens       []GetAddressInfoResponseUtxosTokens `json:"tokens"`
	Txid         *string                             `json:"txid"`
	Used         *bool                               `json:"used"`
	Value        *float64                            `json:"value"`
}

type GetAddressInfoResponse struct {
	Address *string                       `json:"address"`
	Utxos   []GetAddressInfoResponseUtxos `json:"utxos"`
}
