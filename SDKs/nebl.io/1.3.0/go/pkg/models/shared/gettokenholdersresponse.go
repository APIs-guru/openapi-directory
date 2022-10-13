package shared

type GetTokenHoldersResponseHolders struct {
	Address *string  `json:"address"`
	Amount  *float64 `json:"amount"`
}

type GetTokenHoldersResponse struct {
	AggregationPolicy *string                          `json:"aggregationPolicy"`
	Divibility        *float64                         `json:"divibility"`
	Holders           []GetTokenHoldersResponseHolders `json:"holders"`
	LockStatus        *bool                            `json:"lockStatus"`
	SomeUtxo          *string                          `json:"someUtxo"`
	TokenID           *string                          `json:"tokenId"`
}
