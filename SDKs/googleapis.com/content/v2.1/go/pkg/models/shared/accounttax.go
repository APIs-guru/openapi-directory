package shared

type AccountTax struct {
	AccountID *string             `json:"accountId"`
	Kind      *string             `json:"kind"`
	Rules     []AccountTaxTaxRule `json:"rules"`
}
