package shared

import (
	"time"
)

type SandboxBankAccountInfo struct {
	AccountSubType   string     `json:"accountSubType"`
	AccountType      string     `json:"accountType"`
	Alias            *string    `json:"alias"`
	AvailableBalance *float64   `json:"availableBalance"`
	Currency         string     `json:"currency"`
	Description      *string    `json:"description"`
	Iban             string     `json:"iban"`
	LedgerBalance    *float64   `json:"ledgerBalance"`
	OpeningDate      *time.Time `json:"openingDate"`
	OverdraftLimit   *float64   `json:"overdraftLimit"`
}
