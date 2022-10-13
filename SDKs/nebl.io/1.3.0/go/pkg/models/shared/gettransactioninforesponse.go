package shared

type GetTransactionInfoResponseVinPreviousOutput struct {
	Addresses []string `json:"addresses"`
	Asm       *string  `json:"asm"`
	Hex       *string  `json:"hex"`
	ReqSigs   *float64 `json:"reqSigs"`
	Type      *string  `json:"type"`
}

type GetTransactionInfoResponseVinScriptSig struct {
	Asm *string `json:"asm"`
	Hex *string `json:"hex"`
}

type GetTransactionInfoResponseVinTokens struct {
	AggregationPolicy *string  `json:"aggregationPolicy"`
	Amount            *float64 `json:"amount"`
	Divisibility      *float64 `json:"divisibility"`
	IssueTxid         *string  `json:"issueTxid"`
	LockStatus        *bool    `json:"lockStatus"`
	TokenID           *string  `json:"tokenId"`
}

type GetTransactionInfoResponseVin struct {
	PreviousOutput *GetTransactionInfoResponseVinPreviousOutput `json:"previousOutput"`
	ScriptSig      *GetTransactionInfoResponseVinScriptSig      `json:"scriptSig"`
	Sequence       *float64                                     `json:"sequence"`
	Tokens         []GetTransactionInfoResponseVinTokens        `json:"tokens"`
	Txid           *string                                      `json:"txid"`
	Value          *float64                                     `json:"value"`
	Vout           *float64                                     `json:"vout"`
}

type GetTransactionInfoResponseVoutScriptPubKey struct {
	Addresses []string `json:"addresses"`
	Asm       *string  `json:"asm"`
	Hex       *string  `json:"hex"`
	ReqSigs   *float64 `json:"reqSigs"`
	Type      *string  `json:"type"`
}

type GetTransactionInfoResponseVoutTokens struct {
	AggregationPolicy *string  `json:"aggregationPolicy"`
	Amount            *float64 `json:"amount"`
	Divisibility      *float64 `json:"divisibility"`
	IssueTxid         *string  `json:"issueTxid"`
	LockStatus        *bool    `json:"lockStatus"`
	TokenID           *string  `json:"tokenId"`
}

type GetTransactionInfoResponseVout struct {
	Blockheight     *float64                                    `json:"blockheight"`
	N               *float64                                    `json:"n"`
	ScriptPubKey    *GetTransactionInfoResponseVoutScriptPubKey `json:"scriptPubKey"`
	Tokens          []GetTransactionInfoResponseVoutTokens      `json:"tokens"`
	Used            *bool                                       `json:"used"`
	UsedBlockheight *float64                                    `json:"usedBlockheight"`
	UsedTxid        *string                                     `json:"usedTxid"`
	Value           *float64                                    `json:"value"`
}

type GetTransactionInfoResponse struct {
	Blockhash     *string                          `json:"blockhash"`
	Blockheight   *float64                         `json:"blockheight"`
	Blocktime     *float64                         `json:"blocktime"`
	Confirmations *float64                         `json:"confirmations"`
	Fee           *float64                         `json:"fee"`
	Hex           *string                          `json:"hex"`
	Locktime      *float64                         `json:"locktime"`
	Time          *float64                         `json:"time"`
	Totalsent     *float64                         `json:"totalsent"`
	Txid          *string                          `json:"txid"`
	Version       *float64                         `json:"version"`
	Vin           []GetTransactionInfoResponseVin  `json:"vin"`
	Vout          []GetTransactionInfoResponseVout `json:"vout"`
}
