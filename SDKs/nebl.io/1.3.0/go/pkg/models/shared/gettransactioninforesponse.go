package shared

type GetTransactionInfoResponseVinPreviousOutput struct {
	Addresses []string `json:"addresses,omitempty"`
	Asm       *string  `json:"asm,omitempty"`
	Hex       *string  `json:"hex,omitempty"`
	ReqSigs   *float64 `json:"reqSigs,omitempty"`
	Type      *string  `json:"type,omitempty"`
}

type GetTransactionInfoResponseVinScriptSig struct {
	Asm *string `json:"asm,omitempty"`
	Hex *string `json:"hex,omitempty"`
}

type GetTransactionInfoResponseVinTokens struct {
	AggregationPolicy *string  `json:"aggregationPolicy,omitempty"`
	Amount            *float64 `json:"amount,omitempty"`
	Divisibility      *float64 `json:"divisibility,omitempty"`
	IssueTxid         *string  `json:"issueTxid,omitempty"`
	LockStatus        *bool    `json:"lockStatus,omitempty"`
	TokenID           *string  `json:"tokenId,omitempty"`
}

type GetTransactionInfoResponseVin struct {
	PreviousOutput *GetTransactionInfoResponseVinPreviousOutput `json:"previousOutput,omitempty"`
	ScriptSig      *GetTransactionInfoResponseVinScriptSig      `json:"scriptSig,omitempty"`
	Sequence       *float64                                     `json:"sequence,omitempty"`
	Tokens         []GetTransactionInfoResponseVinTokens        `json:"tokens,omitempty"`
	Txid           *string                                      `json:"txid,omitempty"`
	Value          *float64                                     `json:"value,omitempty"`
	Vout           *float64                                     `json:"vout,omitempty"`
}

type GetTransactionInfoResponseVoutScriptPubKey struct {
	Addresses []string `json:"addresses,omitempty"`
	Asm       *string  `json:"asm,omitempty"`
	Hex       *string  `json:"hex,omitempty"`
	ReqSigs   *float64 `json:"reqSigs,omitempty"`
	Type      *string  `json:"type,omitempty"`
}

type GetTransactionInfoResponseVoutTokens struct {
	AggregationPolicy *string  `json:"aggregationPolicy,omitempty"`
	Amount            *float64 `json:"amount,omitempty"`
	Divisibility      *float64 `json:"divisibility,omitempty"`
	IssueTxid         *string  `json:"issueTxid,omitempty"`
	LockStatus        *bool    `json:"lockStatus,omitempty"`
	TokenID           *string  `json:"tokenId,omitempty"`
}

type GetTransactionInfoResponseVout struct {
	Blockheight     *float64                                    `json:"blockheight,omitempty"`
	N               *float64                                    `json:"n,omitempty"`
	ScriptPubKey    *GetTransactionInfoResponseVoutScriptPubKey `json:"scriptPubKey,omitempty"`
	Tokens          []GetTransactionInfoResponseVoutTokens      `json:"tokens,omitempty"`
	Used            *bool                                       `json:"used,omitempty"`
	UsedBlockheight *float64                                    `json:"usedBlockheight,omitempty"`
	UsedTxid        *string                                     `json:"usedTxid,omitempty"`
	Value           *float64                                    `json:"value,omitempty"`
}

type GetTransactionInfoResponse struct {
	Blockhash     *string                          `json:"blockhash,omitempty"`
	Blockheight   *float64                         `json:"blockheight,omitempty"`
	Blocktime     *float64                         `json:"blocktime,omitempty"`
	Confirmations *float64                         `json:"confirmations,omitempty"`
	Fee           *float64                         `json:"fee,omitempty"`
	Hex           *string                          `json:"hex,omitempty"`
	Locktime      *float64                         `json:"locktime,omitempty"`
	Time          *float64                         `json:"time,omitempty"`
	Totalsent     *float64                         `json:"totalsent,omitempty"`
	Txid          *string                          `json:"txid,omitempty"`
	Version       *float64                         `json:"version,omitempty"`
	Vin           []GetTransactionInfoResponseVin  `json:"vin,omitempty"`
	Vout          []GetTransactionInfoResponseVout `json:"vout,omitempty"`
}
