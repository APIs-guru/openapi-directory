package shared

import (
	"time"
)

type ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnumAny    ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnumSingle ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteFileConsentResponse4DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteFileConsentResponse4DataAuthorisation struct {
	AuthorisationType  ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                        `json:"CompletionDateTime,omitempty"`
}

// ObWriteFileConsentResponse4DataCharges
// Set of elements used to provide details of a charge for the payment initiation.
type ObWriteFileConsentResponse4DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

// ObWriteFileConsentResponse4DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteFileConsentResponse4DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteFileConsentResponse4DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteFileConsentResponse4DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteFileConsentResponse4DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
type ObWriteFileConsentResponse4DataInitiation struct {
	ControlSum                 *float64                                                        `json:"ControlSum,omitempty"`
	DebtorAccount              *ObWriteFileConsentResponse4DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	FileHash                   string                                                          `json:"FileHash"`
	FileReference              *string                                                         `json:"FileReference,omitempty"`
	FileType                   string                                                          `json:"FileType"`
	LocalInstrument            *string                                                         `json:"LocalInstrument,omitempty"`
	NumberOfTransactions       *string                                                         `json:"NumberOfTransactions,omitempty"`
	RemittanceInformation      *ObWriteFileConsentResponse4DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime *time.Time                                                      `json:"RequestedExecutionDateTime,omitempty"`
	SupplementaryData          map[string]interface{}                                          `json:"SupplementaryData,omitempty"`
}

type ObWriteFileConsentResponse4DataStatusEnum string

const (
	ObWriteFileConsentResponse4DataStatusEnumAuthorised            ObWriteFileConsentResponse4DataStatusEnum = "Authorised"
	ObWriteFileConsentResponse4DataStatusEnumAwaitingAuthorisation ObWriteFileConsentResponse4DataStatusEnum = "AwaitingAuthorisation"
	ObWriteFileConsentResponse4DataStatusEnumAwaitingUpload        ObWriteFileConsentResponse4DataStatusEnum = "AwaitingUpload"
	ObWriteFileConsentResponse4DataStatusEnumConsumed              ObWriteFileConsentResponse4DataStatusEnum = "Consumed"
	ObWriteFileConsentResponse4DataStatusEnumRejected              ObWriteFileConsentResponse4DataStatusEnum = "Rejected"
)

type ObWriteFileConsentResponse4Data struct {
	Authorisation        *ObWriteFileConsentResponse4DataAuthorisation `json:"Authorisation,omitempty"`
	Charges              []ObWriteFileConsentResponse4DataCharges      `json:"Charges,omitempty"`
	ConsentID            string                                        `json:"ConsentId"`
	CreationDateTime     time.Time                                     `json:"CreationDateTime"`
	CutOffDateTime       *time.Time                                    `json:"CutOffDateTime,omitempty"`
	Debtor               *ObCashAccountDebtor4                         `json:"Debtor,omitempty"`
	Initiation           ObWriteFileConsentResponse4DataInitiation     `json:"Initiation"`
	ScaSupportData       *ObscaSupportData1                            `json:"SCASupportData,omitempty"`
	Status               ObWriteFileConsentResponse4DataStatusEnum     `json:"Status"`
	StatusUpdateDateTime time.Time                                     `json:"StatusUpdateDateTime"`
}

type ObWriteFileConsentResponse4 struct {
	Data  ObWriteFileConsentResponse4Data `json:"Data"`
	Links *Links                          `json:"Links,omitempty"`
	Meta  *Meta                           `json:"Meta,omitempty"`
}
