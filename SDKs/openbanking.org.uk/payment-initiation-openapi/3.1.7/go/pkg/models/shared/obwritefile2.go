package shared

import (
	"time"
)

type ObWriteFile2DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteFile2DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteFile2DataInitiation struct {
	ControlSum                 *float64                                         `json:"ControlSum"`
	DebtorAccount              *ObWriteFile2DataInitiationDebtorAccount         `json:"DebtorAccount"`
	FileHash                   string                                           `json:"FileHash"`
	FileReference              *string                                          `json:"FileReference"`
	FileType                   string                                           `json:"FileType"`
	LocalInstrument            *string                                          `json:"LocalInstrument"`
	NumberOfTransactions       *string                                          `json:"NumberOfTransactions"`
	RemittanceInformation      *ObWriteFile2DataInitiationRemittanceInformation `json:"RemittanceInformation"`
	RequestedExecutionDateTime *time.Time                                       `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                           `json:"SupplementaryData"`
}

type ObWriteFile2Data struct {
	ConsentID  string                     `json:"ConsentId"`
	Initiation ObWriteFile2DataInitiation `json:"Initiation"`
}

type ObWriteFile2 struct {
	Data ObWriteFile2Data `json:"Data"`
}
