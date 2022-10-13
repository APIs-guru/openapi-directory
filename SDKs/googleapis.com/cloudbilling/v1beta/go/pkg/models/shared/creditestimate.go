package shared

type CreditEstimate struct {
	CreditAmount      *Money  `json:"creditAmount"`
	CreditDescription *string `json:"creditDescription"`
	CreditType        *string `json:"creditType"`
}
