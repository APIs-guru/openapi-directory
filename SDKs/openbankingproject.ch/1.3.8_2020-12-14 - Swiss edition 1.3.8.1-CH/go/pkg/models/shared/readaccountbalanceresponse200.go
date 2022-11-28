package shared

// ReadAccountBalanceResponse200
// Body of the response for a successful read balance for an account request.
type ReadAccountBalanceResponse200 struct {
	Account  *AccountReference16Ch `json:"account,omitempty"`
	Balances []Balance             `json:"balances"`
}
