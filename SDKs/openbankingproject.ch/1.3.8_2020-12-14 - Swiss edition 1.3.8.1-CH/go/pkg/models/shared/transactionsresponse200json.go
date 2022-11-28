package shared

// TransactionsResponse200JSON
// Body of the JSON response for a successful read transaction list request.
// This account report contains transactions resulting from the query parameters.
type TransactionsResponse200JSON struct {
	Links        map[string]HrefType   `json:"_links,omitempty"`
	Account      *AccountReference16Ch `json:"account,omitempty"`
	Balances     []Balance             `json:"balances,omitempty"`
	Transactions *AccountReport        `json:"transactions,omitempty"`
}
