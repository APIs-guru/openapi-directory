package shared

import (
	"time"
)

type SandboxBankAccountInfo struct {
	AccountSubType   string     `json:"accountSubType"`
	AccountType      string     `json:"accountType"`
	Alias            *string    `json:"alias,omitempty"`
	AvailableBalance *float64   `json:"availableBalance,omitempty"`
	Currency         string     `json:"currency"`
	Description      *string    `json:"description,omitempty"`
	Iban             string     `json:"iban"`
	LedgerBalance    *float64   `json:"ledgerBalance,omitempty"`
	OpeningDate      *time.Time `json:"openingDate,omitempty"`
	OverdraftLimit   *float64   `json:"overdraftLimit,omitempty"`
}
