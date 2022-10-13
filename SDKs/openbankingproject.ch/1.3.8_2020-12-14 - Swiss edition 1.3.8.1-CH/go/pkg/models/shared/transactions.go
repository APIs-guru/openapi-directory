package shared

import (
	"time"
)

type Transactions struct {
	Links                                  map[string]HrefType               `json:"_links"`
	AdditionalInformation                  *string                           `json:"additionalInformation"`
	AdditionalInformationStructured        *AdditionalInformationStructured  `json:"additionalInformationStructured"`
	BalanceAfterTransaction                *Balance                          `json:"balanceAfterTransaction"`
	BankTransactionCode                    *string                           `json:"bankTransactionCode"`
	BatchIndicator                         *bool                             `json:"batchIndicator"`
	BatchNumberOfTransactions              *int64                            `json:"batchNumberOfTransactions"`
	BookingDate                            *time.Time                        `json:"bookingDate"`
	CheckID                                *string                           `json:"checkId"`
	CreditorAccount                        *AccountReference16Ch             `json:"creditorAccount"`
	CreditorAgent                          *string                           `json:"creditorAgent"`
	CreditorID                             *string                           `json:"creditorId"`
	CreditorName                           *string                           `json:"creditorName"`
	CurrencyExchange                       []ReportExchangeRate              `json:"currencyExchange"`
	DebtorAccount                          *AccountReference16Ch             `json:"debtorAccount"`
	DebtorAgent                            *string                           `json:"debtorAgent"`
	DebtorName                             *string                           `json:"debtorName"`
	EndToEndID                             *string                           `json:"endToEndId"`
	EntryDetails                           []EntryDetailsElement             `json:"entryDetails"`
	EntryReference                         *string                           `json:"entryReference"`
	MandateID                              *string                           `json:"mandateId"`
	ProprietaryBankTransactionCode         *string                           `json:"proprietaryBankTransactionCode"`
	PurposeCode                            *PurposeCodeEnum                  `json:"purposeCode"`
	RemittanceInformationStructured        *string                           `json:"remittanceInformationStructured"`
	RemittanceInformationStructuredArray   []RemittanceInformationStructured `json:"remittanceInformationStructuredArray"`
	RemittanceInformationUnstructured      *string                           `json:"remittanceInformationUnstructured"`
	RemittanceInformationUnstructuredArray []string                          `json:"remittanceInformationUnstructuredArray"`
	TransactionAmount                      Amount                            `json:"transactionAmount"`
	TransactionID                          *string                           `json:"transactionId"`
	UltimateCreditor                       *string                           `json:"ultimateCreditor"`
	UltimateDebtor                         *string                           `json:"ultimateDebtor"`
	ValueDate                              *time.Time                        `json:"valueDate"`
}
