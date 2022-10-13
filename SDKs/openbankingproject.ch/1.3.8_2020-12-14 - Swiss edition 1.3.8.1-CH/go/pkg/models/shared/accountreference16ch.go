package shared

type AccountReference16Ch struct {
	CashAccountType            *string `json:"cashAccountType"`
	Currency                   *string `json:"currency"`
	Iban                       *string `json:"iban"`
	OtherAccountIdentification *string `json:"otherAccountIdentification"`
}
