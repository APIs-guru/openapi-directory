package shared



type GetAddressInfoResponseUtxosTokens struct {
    AggregationPolicy *string `json:"aggregationPolicy,omitempty"`
    Amount *float64 `json:"amount,omitempty"`
    Divisibility *float64 `json:"divisibility,omitempty"`
    IssueTxid *string `json:"issueTxid,omitempty"`
    LockStatus *bool `json:"lockStatus,omitempty"`
    TokenID *string `json:"tokenId,omitempty"`
    
}

type GetAddressInfoResponseUtxos struct {
    Blockheight *float64 `json:"blockheight,omitempty"`
    Blocktime *float64 `json:"blocktime,omitempty"`
    Index *float64 `json:"index,omitempty"`
    ScriptPubKey map[string]interface{} `json:"scriptPubKey,omitempty"`
    Tokens []GetAddressInfoResponseUtxosTokens `json:"tokens,omitempty"`
    Txid *string `json:"txid,omitempty"`
    Used *bool `json:"used,omitempty"`
    Value *float64 `json:"value,omitempty"`
    
}

type GetAddressInfoResponse struct {
    Address *string `json:"address,omitempty"`
    Utxos []GetAddressInfoResponseUtxos `json:"utxos,omitempty"`
    
}

