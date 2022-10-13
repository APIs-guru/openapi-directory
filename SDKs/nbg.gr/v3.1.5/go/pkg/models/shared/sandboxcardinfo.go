package shared

type SandboxCardInfo struct {
	AvailableBalance *float64 `json:"availableBalance"`
	CreditLimit      *float64 `json:"creditLimit"`
	Description      *string  `json:"description"`
	Expiration       string   `json:"expiration"`
	HolderName       string   `json:"holderName"`
	LedgerBalance    *float64 `json:"ledgerBalance"`
	Number           string   `json:"number"`
	SubType          *string  `json:"subType"`
	Type             *string  `json:"type"`
}
