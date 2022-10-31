package shared



type GetTokenHoldersResponseHolders struct {
    Address *string `json:"address,omitempty"`
    Amount *float64 `json:"amount,omitempty"`
    
}

type GetTokenHoldersResponse struct {
    AggregationPolicy *string `json:"aggregationPolicy,omitempty"`
    Divibility *float64 `json:"divibility,omitempty"`
    Holders []GetTokenHoldersResponseHolders `json:"holders,omitempty"`
    LockStatus *bool `json:"lockStatus,omitempty"`
    SomeUtxo *string `json:"someUtxo,omitempty"`
    TokenID *string `json:"tokenId,omitempty"`
    
}

