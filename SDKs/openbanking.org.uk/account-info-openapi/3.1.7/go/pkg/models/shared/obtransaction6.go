package shared

import (
	"time"
)

type ObTransaction6 struct {
	AccountID                      string                                           `json:"AccountId"`
	AddressLine                    *string                                          `json:"AddressLine,omitempty"`
	Amount                         ObActiveOrHistoricCurrencyAndAmount9             `json:"Amount"`
	Balance                        *ObTransactionCashBalance                        `json:"Balance,omitempty"`
	BankTransactionCode            *ObBankTransactionCodeStructure1                 `json:"BankTransactionCode,omitempty"`
	BookingDateTime                time.Time                                        `json:"BookingDateTime"`
	CardInstrument                 *ObTransactionCardInstrument1                    `json:"CardInstrument,omitempty"`
	ChargeAmount                   *ObActiveOrHistoricCurrencyAndAmount10           `json:"ChargeAmount,omitempty"`
	CreditDebitIndicator           ObCreditDebitCode1Enum                           `json:"CreditDebitIndicator"`
	CreditorAccount                *ObCashAccount60                                 `json:"CreditorAccount,omitempty"`
	CreditorAgent                  *ObBranchAndFinancialInstitutionIdentification61 `json:"CreditorAgent,omitempty"`
	CurrencyExchange               *ObCurrencyExchange5                             `json:"CurrencyExchange,omitempty"`
	DebtorAccount                  *ObCashAccount61                                 `json:"DebtorAccount,omitempty"`
	DebtorAgent                    *ObBranchAndFinancialInstitutionIdentification62 `json:"DebtorAgent,omitempty"`
	MerchantDetails                *ObMerchantDetails1                              `json:"MerchantDetails,omitempty"`
	ProprietaryBankTransactionCode *ProprietaryBankTransactionCodeStructure1        `json:"ProprietaryBankTransactionCode,omitempty"`
	StatementReference             []string                                         `json:"StatementReference,omitempty"`
	Status                         ObEntryStatus1CodeEnum                           `json:"Status"`
	SupplementaryData              map[string]interface{}                           `json:"SupplementaryData,omitempty"`
	TransactionID                  *string                                          `json:"TransactionId,omitempty"`
	TransactionInformation         *string                                          `json:"TransactionInformation,omitempty"`
	TransactionMutability          *ObTransactionMutability1CodeEnum                `json:"TransactionMutability,omitempty"`
	TransactionReference           *string                                          `json:"TransactionReference,omitempty"`
	ValueDateTime                  *time.Time                                       `json:"ValueDateTime,omitempty"`
}
