package shared

type AccountReference16Ch struct {
	CashAccountType            *string `json:"cashAccountType,omitempty"`
	Currency                   *string `json:"currency,omitempty"`
	Iban                       *string `json:"iban,omitempty"`
	OtherAccountIdentification *string `json:"otherAccountIdentification,omitempty"`
}
