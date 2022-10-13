package shared

type ReadAccountBalanceResponse200 struct {
	Account  *AccountReference16Ch `json:"account"`
	Balances []Balance             `json:"balances"`
}
