package shared

import (
	"time"
)

type ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnumAny    ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnumSingle ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteFileConsent3DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteFileConsent3DataAuthorisation struct {
	AuthorisationType  ObWriteFileConsent3DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                `json:"CompletionDateTime,omitempty"`
}

// ObWriteFileConsent3DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteFileConsent3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteFileConsent3DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteFileConsent3DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteFileConsent3DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
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
