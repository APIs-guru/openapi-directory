package shared

import (
	"time"
)

// ObWriteFileResponse3DataCharges
// Set of elements used to provide details of a charge for the payment initiation.
type ObWriteFileResponse3DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

// ObWriteFileResponse3DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteFileResponse3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteFileResponse3DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteFileResponse3DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteFileResponse3DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds using a payment file.
type ObWriteFileResponse3DataInitiation struct {
	ControlSum                 *float64                                                 `json:"ControlSum,omitempty"`
	DebtorAccount              *ObWriteFileResponse3DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	FileHash                   string                                                   `json:"FileHash"`
	FileReference              *string                                                  `json:"FileReference,omitempty"`
	FileType                   string                                                   `json:"FileType"`
	LocalInstrument            *string                                                  `json:"LocalInstrument,omitempty"`
	NumberOfTransactions       *string                                                  `json:"NumberOfTransactions,omitempty"`
	RemittanceInformation      *ObWriteFileResponse3DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime *time.Time                                               `json:"RequestedExecutionDateTime,omitempty"`
	SupplementaryData          map[string]interface{}                                   `json:"SupplementaryData,omitempty"`
}

type ObWriteFileResponse3DataMultiAuthorisationStatusEnum string

const (
	ObWriteFileResponse3DataMultiAuthorisationStatusEnumAuthorised                   ObWriteFileResponse3DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteFileResponse3DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteFileResponse3DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteFileResponse3DataMultiAuthorisationStatusEnumRejected                     ObWriteFileResponse3DataMultiAuthorisationStatusEnum = "Rejected"
)

// ObWriteFileResponse3DataMultiAuthorisation
// The multiple authorisation flow response from the ASPSP.
type ObWriteFileResponse3DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                           `json:"ExpirationDateTime,omitempty"`
	LastUpdateDateTime *time.Time                                           `json:"LastUpdateDateTime,omitempty"`
	NumberReceived     *int64                                               `json:"NumberReceived,omitempty"`
	NumberRequired     *int64                                               `json:"NumberRequired,omitempty"`
	Status             ObWriteFileResponse3DataMultiAuthorisationStatusEnum `json:"Status"`
}

type ObWriteFileResponse3DataStatusEnum string

const (
	ObWriteFileResponse3DataStatusEnumInitiationCompleted ObWriteFileResponse3DataStatusEnum = "InitiationCompleted"
	ObWriteFileResponse3DataStatusEnumInitiationFailed    ObWriteFileResponse3DataStatusEnum = "InitiationFailed"
	ObWriteFileResponse3DataStatusEnumInitiationPending   ObWriteFileResponse3DataStatusEnum = "InitiationPending"
)

type ObWriteFileResponse3Data struct {
	Charges              []ObWriteFileResponse3DataCharges           `json:"Charges,omitempty"`
	ConsentID            string                                      `json:"ConsentId"`
	CreationDateTime     time.Time                                   `json:"CreationDateTime"`
	Debtor               *ObCashAccountDebtor4                       `json:"Debtor,omitempty"`
	FilePaymentID        string                                      `json:"FilePaymentId"`
	Initiation           ObWriteFileResponse3DataInitiation          `json:"Initiation"`
	MultiAuthorisation   *ObWriteFileResponse3DataMultiAuthorisation `json:"MultiAuthorisation,omitempty"`
	Status               ObWriteFileResponse3DataStatusEnum          `json:"Status"`
	StatusUpdateDateTime time.Time                                   `json:"StatusUpdateDateTime"`
}

type ObWriteFileResponse3 struct {
	Data  ObWriteFileResponse3Data `json:"Data"`
	Links *Links                   `json:"Links,omitempty"`
	Meta  *Meta                    `json:"Meta,omitempty"`
}
