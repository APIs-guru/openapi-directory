package shared

// AccountTax
// The tax settings of a merchant account. All methods require the admin role.
type AccountTax struct {
	AccountID *string             `json:"accountId,omitempty"`
	Kind      *string             `json:"kind,omitempty"`
	Rules     []AccountTaxTaxRule `json:"rules,omitempty"`
}
