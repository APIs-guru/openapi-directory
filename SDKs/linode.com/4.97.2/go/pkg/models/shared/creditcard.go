package shared

// CreditCard
// An object representing the credit card information you have on file with
// Linode to make Payments against your Account.
type CreditCard struct {
	CardNumber  string `json:"card_number"`
	Cvv         string `json:"cvv"`
	ExpiryMonth int64  `json:"expiry_month"`
	ExpiryYear  int64  `json:"expiry_year"`
}
