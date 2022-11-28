package shared

import (
	"time"
)

// ObTransaction6
// Provides further details on an entry in the report.
type ObTransaction6 struct {
	AccountID                      string                                    `json:"AccountId"`
	Amount                         ObActiveOrHistoricCurrencyAndAmount       `json:"Amount"`
	Balance                        *ObTransactionCashBalance                 `json:"Balance,omitempty"`
	BookingDateTime                time.Time                                 `json:"BookingDateTime"`
	CreditDebitIndicator           ObCreditDebitCodeEnum                     `json:"CreditDebitIndicator"`
	CreditorAccount                *ObCashAccount6                           `json:"CreditorAccount,omitempty"`
	DebtorAccount                  *ObCashAccount6                           `json:"DebtorAccount,omitempty"`
	ProprietaryBankTransactionCode *ProprietaryBankTransactionCodeStructure1 `json:"ProprietaryBankTransactionCode,omitempty"`
	Status                         ObEntryStatus1CodeEnum                    `json:"Status"`
	TransactionInformation         *string                                   `json:"TransactionInformation,omitempty"`
	TransactionReference           *string                                   `json:"TransactionReference,omitempty"`
	ValueDateTime                  *time.Time                                `json:"ValueDateTime,omitempty"`
}
