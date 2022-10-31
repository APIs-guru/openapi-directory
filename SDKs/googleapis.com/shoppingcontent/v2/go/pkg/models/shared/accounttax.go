package shared

type AccountTax struct {
	AccountID *string             `json:"accountId,omitempty"`
	Kind      *string             `json:"kind,omitempty"`
	Rules     []AccountTaxTaxRule `json:"rules,omitempty"`
}
