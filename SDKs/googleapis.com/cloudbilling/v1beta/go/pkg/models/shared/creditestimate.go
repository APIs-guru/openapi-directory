package shared

// CreditEstimate
// An estimated credit applied to the costs on a SKU.
type CreditEstimate struct {
	CreditAmount      *Money  `json:"creditAmount,omitempty"`
	CreditDescription *string `json:"creditDescription,omitempty"`
	CreditType        *string `json:"creditType,omitempty"`
}
