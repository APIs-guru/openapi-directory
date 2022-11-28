package shared

import (
	"time"
)

// ObWriteFile2DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteFile2DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteFile2DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteFile2DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteFile2DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
type ObWriteFile2DataInitiation struct {
	ControlSum                 *float64                                         `json:"ControlSum,omitempty"`
	DebtorAccount              *ObWriteFile2DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	FileHash                   string                                           `json:"FileHash"`
	FileReference              *string                                          `json:"FileReference,omitempty"`
	FileType                   string                                           `json:"FileType"`
	LocalInstrument            *string                                          `json:"LocalInstrument,omitempty"`
	NumberOfTransactions       *string                                          `json:"NumberOfTransactions,omitempty"`
	RemittanceInformation      *ObWriteFile2DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime *time.Time                                       `json:"RequestedExecutionDateTime,omitempty"`
	SupplementaryData          map[string]interface{}                           `json:"SupplementaryData,omitempty"`
}

type ObWriteFile2Data struct {
	ConsentID  string                     `json:"ConsentId"`
	Initiation ObWriteFile2DataInitiation `json:"Initiation"`
}

type ObWriteFile2 struct {
	Data ObWriteFile2Data `json:"Data"`
}
