package shared

type GetTxResponseVinScriptSig struct {
	Asm *string `json:"asm"`
	Hex *string `json:"hex"`
}

type GetTxResponseVin struct {
	N         *float64                   `json:"n"`
	ScriptSig *GetTxResponseVinScriptSig `json:"scriptSig"`
	Sequence  *float64                   `json:"sequence"`
	Txid      *string                    `json:"txid"`
	Value     *float64                   `json:"value"`
	ValueSat  *float64                   `json:"valueSat"`
	Vout      *float64                   `json:"vout"`
}

type GetTxResponseVoutScriptPubKey struct {
	Addresses []string `json:"addresses"`
	Asm       *string  `json:"asm"`
	Hex       *string  `json:"hex"`
	ReqSigs   *float64 `json:"reqSigs"`
	Type      *string  `json:"type"`
}

type GetTxResponseVout struct {
	Blockheight     *float64                       `json:"blockheight"`
	N               *float64                       `json:"n"`
	ScriptPubKey    *GetTxResponseVoutScriptPubKey `json:"scriptPubKey"`
	Used            *bool                          `json:"used"`
	UsedBlockheight *float64                       `json:"usedBlockheight"`
	UsedTxid        *string                        `json:"usedTxid"`
	Value           *float64                       `json:"value"`
}

type GetTxResponse struct {
	Blockhash     *string             `json:"blockhash"`
	Blockheight   *float64            `json:"blockheight"`
	Blocktime     *float64            `json:"blocktime"`
	Confirmations *float64            `json:"confirmations"`
	Fee           *float64            `json:"fee"`
	Fees          *float64            `json:"fees"`
	Locktime      *float64            `json:"locktime"`
	Size          *float64            `json:"size"`
	Time          *float64            `json:"time"`
	Totalsent     *float64            `json:"totalsent"`
	Txid          *string             `json:"txid"`
	ValueIn       *float64            `json:"valueIn"`
	ValueOut      *float64            `json:"valueOut"`
	Version       *float64            `json:"version"`
	Vin           []GetTxResponseVin  `json:"vin"`
	Vout          []GetTxResponseVout `json:"vout"`
}
