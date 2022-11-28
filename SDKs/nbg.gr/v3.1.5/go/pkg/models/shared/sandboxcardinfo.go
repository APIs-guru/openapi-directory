package shared

// SandboxCardInfo
// Sandbox card information
type SandboxCardInfo struct {
	AvailableBalance *float64 `json:"availableBalance,omitempty"`
	CreditLimit      *float64 `json:"creditLimit,omitempty"`
	Description      *string  `json:"description,omitempty"`
	Expiration       string   `json:"expiration"`
	HolderName       string   `json:"holderName"`
	LedgerBalance    *float64 `json:"ledgerBalance,omitempty"`
	Number           string   `json:"number"`
	SubType          *string  `json:"subType,omitempty"`
	Type             *string  `json:"type,omitempty"`
}
