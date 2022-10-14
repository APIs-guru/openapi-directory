package shared

type CreditEstimate struct {
	CreditAmount      *Money  `json:"creditAmount,omitempty"`
	CreditDescription *string `json:"creditDescription,omitempty"`
	CreditType        *string `json:"creditType,omitempty"`
}
