package shared

type BurnTokenRequestBurn struct {
	Amount  *float64 `json:"amount"`
	TokenID *string  `json:"tokenId"`
}

type BurnTokenRequestTransfer struct {
	Address *string  `json:"address"`
	Amount  *float64 `json:"amount"`
	TokenID *string  `json:"tokenId"`
}

type BurnTokenRequest struct {
	Burn     []BurnTokenRequestBurn     `json:"burn"`
	Fee      float64                    `json:"fee"`
	From     []string                   `json:"from"`
	Transfer []BurnTokenRequestTransfer `json:"transfer"`
}
