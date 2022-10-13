package shared

import (
	"time"
)

type ObTransaction6 struct {
	AccountID                      string                                    `json:"AccountId"`
	Amount                         ObActiveOrHistoricCurrencyAndAmount       `json:"Amount"`
	Balance                        *ObTransactionCashBalance                 `json:"Balance"`
	BookingDateTime                time.Time                                 `json:"BookingDateTime"`
	CreditDebitIndicator           ObCreditDebitCodeEnum                     `json:"CreditDebitIndicator"`
	CreditorAccount                *ObCashAccount6                           `json:"CreditorAccount"`
	DebtorAccount                  *ObCashAccount6                           `json:"DebtorAccount"`
	ProprietaryBankTransactionCode *ProprietaryBankTransactionCodeStructure1 `json:"ProprietaryBankTransactionCode"`
	Status                         ObEntryStatus1CodeEnum                    `json:"Status"`
	TransactionInformation         *string                                   `json:"TransactionInformation"`
	TransactionReference           *string                                   `json:"TransactionReference"`
	ValueDateTime                  *time.Time                                `json:"ValueDateTime"`
}
