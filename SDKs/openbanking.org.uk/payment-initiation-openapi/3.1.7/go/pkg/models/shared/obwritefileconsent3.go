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
	CompletionDateTime *time.Time                                                `json:"CompletionDateTime,omitempty"`
}

type ObWriteFileConsent3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteFileConsent3DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

type ObWriteFileConsent3DataInitiation struct {
	ControlSum                 *float64                                                `json:"ControlSum,omitempty"`
	DebtorAccount              *ObWriteFileConsent3DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	FileHash                   string                                                  `json:"FileHash"`
	FileReference              *string                                                 `json:"FileReference,omitempty"`
	FileType                   string                                                  `json:"FileType"`
	LocalInstrument            *string                                                 `json:"LocalInstrument,omitempty"`
	NumberOfTransactions       *string                                                 `json:"NumberOfTransactions,omitempty"`
	RemittanceInformation      *ObWriteFileConsent3DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime *time.Time                                              `json:"RequestedExecutionDateTime,omitempty"`
	SupplementaryData          map[string]interface{}                                  `json:"SupplementaryData,omitempty"`
}

type ObWriteFileConsent3Data struct {
	Authorisation  *ObWriteFileConsent3DataAuthorisation `json:"Authorisation,omitempty"`
	Initiation     ObWriteFileConsent3DataInitiation     `json:"Initiation"`
	ScaSupportData *ObscaSupportData1                    `json:"SCASupportData,omitempty"`
}

type ObWriteFileConsent3 struct {
	Data ObWriteFileConsent3Data `json:"Data"`
}
