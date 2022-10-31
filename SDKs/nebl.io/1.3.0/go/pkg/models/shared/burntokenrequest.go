package shared



type BurnTokenRequestBurn struct {
    Amount *float64 `json:"amount,omitempty"`
    TokenID *string `json:"tokenId,omitempty"`
    
}

type BurnTokenRequestTransfer struct {
    Address *string `json:"address,omitempty"`
    Amount *float64 `json:"amount,omitempty"`
    TokenID *string `json:"tokenId,omitempty"`
    
}

type BurnTokenRequest struct {
    Burn []BurnTokenRequestBurn `json:"burn"`
    Fee float64 `json:"fee"`
    From []string `json:"from,omitempty"`
    Transfer []BurnTokenRequestTransfer `json:"transfer,omitempty"`
    
}

