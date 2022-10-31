package shared



type ReadAccountBalanceResponse200 struct {
    Account *AccountReference16Ch `json:"account,omitempty"`
    Balances []Balance `json:"balances"`
    
}

