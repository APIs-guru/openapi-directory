package shared

type GetTxResponseVinScriptSig struct {
	Asm *string `json:"asm,omitempty"`
	Hex *string `json:"hex,omitempty"`
}

type GetTxResponseVin struct {
	N         *float64                   `json:"n,omitempty"`
	ScriptSig *GetTxResponseVinScriptSig `json:"scriptSig,omitempty"`
	Sequence  *float64                   `json:"sequence,omitempty"`
	Txid      *string                    `json:"txid,omitempty"`
	Value     *float64                   `json:"value,omitempty"`
	ValueSat  *float64                   `json:"valueSat,omitempty"`
	Vout      *float64                   `json:"vout,omitempty"`
}

type GetTxResponseVoutScriptPubKey struct {
	Addresses []string `json:"addresses,omitempty"`
	Asm       *string  `json:"asm,omitempty"`
	Hex       *string  `json:"hex,omitempty"`
	ReqSigs   *float64 `json:"reqSigs,omitempty"`
	Type      *string  `json:"type,omitempty"`
}

type GetTxResponseVout struct {
	Blockheight     *float64                       `json:"blockheight,omitempty"`
	N               *float64                       `json:"n,omitempty"`
	ScriptPubKey    *GetTxResponseVoutScriptPubKey `json:"scriptPubKey,omitempty"`
	Used            *bool                          `json:"used,omitempty"`
	UsedBlockheight *float64                       `json:"usedBlockheight,omitempty"`
	UsedTxid        *string                        `json:"usedTxid,omitempty"`
	Value           *float64                       `json:"value,omitempty"`
}

type GetTxResponse struct {
	Blockhash     *string             `json:"blockhash,omitempty"`
	Blockheight   *float64            `json:"blockheight,omitempty"`
	Blocktime     *float64            `json:"blocktime,omitempty"`
	Confirmations *float64            `json:"confirmations,omitempty"`
	Fee           *float64            `json:"fee,omitempty"`
	Fees          *float64            `json:"fees,omitempty"`
	Locktime      *float64            `json:"locktime,omitempty"`
	Size          *float64            `json:"size,omitempty"`
	Time          *float64            `json:"time,omitempty"`
	Totalsent     *float64            `json:"totalsent,omitempty"`
	Txid          *string             `json:"txid,omitempty"`
	ValueIn       *float64            `json:"valueIn,omitempty"`
	ValueOut      *float64            `json:"valueOut,omitempty"`
	Version       *float64            `json:"version,omitempty"`
	Vin           []GetTxResponseVin  `json:"vin,omitempty"`
	Vout          []GetTxResponseVout `json:"vout,omitempty"`
}
