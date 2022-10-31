package shared



type TransactionsResponse200JSON struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    Account *AccountReference16Ch `json:"account,omitempty"`
    Balances []Balance `json:"balances,omitempty"`
    Transactions *AccountReport `json:"transactions,omitempty"`
    
}

