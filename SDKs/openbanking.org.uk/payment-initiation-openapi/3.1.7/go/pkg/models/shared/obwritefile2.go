package shared

import (
	"time"
)

type ObWriteFile2DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteFile2DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

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
