package shared

type TransactionsResponse200JSON struct {
	Links        map[string]HrefType   `json:"_links"`
	Account      *AccountReference16Ch `json:"account"`
	Balances     []Balance             `json:"balances"`
	Transactions *AccountReport        `json:"transactions"`
}
