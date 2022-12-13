package shared

type BankAccountCreateRequest struct {
	AccountNumber string `json:"account_number"`
	BankName      string `json:"bank_name"`
	IsChecking    bool   `json:"is_checking"`
	RoutingNumber string `json:"routing_number"`
}
