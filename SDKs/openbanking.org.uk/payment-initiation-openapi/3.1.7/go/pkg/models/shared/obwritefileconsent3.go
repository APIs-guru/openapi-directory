package shared

import (
	"time"
)

type ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnumAny    ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnumSingle ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteFileConsent3DataAuthorisation struct {
	AuthorisationType  ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                `json:"CompletionDateTime"`
}

type ObWriteFileConsent3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteFileConsent3DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteFileConsent3DataInitiation struct {
	ControlSum                 *float64                                                `json:"ControlSum"`
	DebtorAccount              *ObWriteFileConsent3DataInitiationDebtorAccount         `json:"DebtorAccount"`
	FileHash                   string                                                  `json:"FileHash"`
	FileReference              *string                                                 `json:"FileReference"`
	FileType                   string                                                  `json:"FileType"`
	LocalInstrument            *string                                                 `json:"LocalInstrument"`
	NumberOfTransactions       *string                                                 `json:"NumberOfTransactions"`
	RemittanceInformation      *ObWriteFileConsent3DataInitiationRemittanceInformation `json:"RemittanceInformation"`
	RequestedExecutionDateTime *time.Time                                              `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                  `json:"SupplementaryData"`
}

type ObWriteFileConsent3Data struct {
	Authorisation  *ObWriteFileConsent3DataAuthorisation `json:"Authorisation"`
	Initiation     ObWriteFileConsent3DataInitiation     `json:"Initiation"`
	ScaSupportData *ObscaSupportData1                    `json:"SCASupportData"`
}

type ObWriteFileConsent3 struct {
	Data ObWriteFileConsent3Data `json:"Data"`
}
