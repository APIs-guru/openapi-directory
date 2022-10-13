package shared

import (
	"time"
)

type ObTransaction6 struct {
	AccountID                      string                                           `json:"AccountId"`
	AddressLine                    *string                                          `json:"AddressLine"`
	Amount                         ObActiveOrHistoricCurrencyAndAmount9             `json:"Amount"`
	Balance                        *ObTransactionCashBalance                        `json:"Balance"`
	BankTransactionCode            *ObBankTransactionCodeStructure1                 `json:"BankTransactionCode"`
	BookingDateTime                time.Time                                        `json:"BookingDateTime"`
	CardInstrument                 *ObTransactionCardInstrument1                    `json:"CardInstrument"`
	ChargeAmount                   *ObActiveOrHistoricCurrencyAndAmount10           `json:"ChargeAmount"`
	CreditDebitIndicator           ObCreditDebitCode1Enum                           `json:"CreditDebitIndicator"`
	CreditorAccount                *ObCashAccount60                                 `json:"CreditorAccount"`
	CreditorAgent                  *ObBranchAndFinancialInstitutionIdentification61 `json:"CreditorAgent"`
	CurrencyExchange               *ObCurrencyExchange5                             `json:"CurrencyExchange"`
	DebtorAccount                  *ObCashAccount61                                 `json:"DebtorAccount"`
	DebtorAgent                    *ObBranchAndFinancialInstitutionIdentification62 `json:"DebtorAgent"`
	MerchantDetails                *ObMerchantDetails1                              `json:"MerchantDetails"`
	ProprietaryBankTransactionCode *ProprietaryBankTransactionCodeStructure1        `json:"ProprietaryBankTransactionCode"`
	StatementReference             []string                                         `json:"StatementReference"`
	Status                         ObEntryStatus1CodeEnum                           `json:"Status"`
	SupplementaryData              map[string]interface{}                           `json:"SupplementaryData"`
	TransactionID                  *string                                          `json:"TransactionId"`
	TransactionInformation         *string                                          `json:"TransactionInformation"`
	TransactionMutability          *ObTransactionMutability1CodeEnum                `json:"TransactionMutability"`
	TransactionReference           *string                                          `json:"TransactionReference"`
	ValueDateTime                  *time.Time                                       `json:"ValueDateTime"`
}
