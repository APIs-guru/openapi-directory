package shared

// AccountReference16Ch
// Reference to an account by either
//   - IBAN, of a payment accounts, or
//   - otherAccountIdentification, for payment accounts if there is no IBAN
//
// adapted from ISO pain.001.001.03.ch.02 CashAccount16-CH_IdTpCcy
type AccountReference16Ch struct {
	CashAccountType            *string `json:"cashAccountType,omitempty"`
	Currency                   *string `json:"currency,omitempty"`
	Iban                       *string `json:"iban,omitempty"`
	OtherAccountIdentification *string `json:"otherAccountIdentification,omitempty"`
}
