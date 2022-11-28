package shared

import (
	"time"
)

// ObFundsConfirmationConsent1DataDebtorAccount
// Unambiguous identification of the account of the debtor to which a confirmation of funds consent will be applied.
type ObFundsConfirmationConsent1DataDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObFundsConfirmationConsent1Data struct {
	DebtorAccount      ObFundsConfirmationConsent1DataDebtorAccount `json:"DebtorAccount"`
	ExpirationDateTime *time.Time                                   `json:"ExpirationDateTime,omitempty"`
}

type ObFundsConfirmationConsent1 struct {
	Data ObFundsConfirmationConsent1Data `json:"Data"`
}
