package shared

import (
	"time"
)

type ObWriteFileResponse3DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteFileResponse3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteFileResponse3DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteFileResponse3DataInitiation struct {
	ControlSum                 *float64                                                 `json:"ControlSum"`
	DebtorAccount              *ObWriteFileResponse3DataInitiationDebtorAccount         `json:"DebtorAccount"`
	FileHash                   string                                                   `json:"FileHash"`
	FileReference              *string                                                  `json:"FileReference"`
	FileType                   string                                                   `json:"FileType"`
	LocalInstrument            *string                                                  `json:"LocalInstrument"`
	NumberOfTransactions       *string                                                  `json:"NumberOfTransactions"`
	RemittanceInformation      *ObWriteFileResponse3DataInitiationRemittanceInformation `json:"RemittanceInformation"`
	RequestedExecutionDateTime *time.Time                                               `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                   `json:"SupplementaryData"`
}

type ObWriteFileResponse3DataMultiAuthorisationStatusEnum string

const (
	ObWriteFileResponse3DataMultiAuthorisationStatusEnumAuthorised                   ObWriteFileResponse3DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteFileResponse3DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteFileResponse3DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteFileResponse3DataMultiAuthorisationStatusEnumRejected                     ObWriteFileResponse3DataMultiAuthorisationStatusEnum = "Rejected"
)

type ObWriteFileResponse3DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                           `json:"ExpirationDateTime"`
	LastUpdateDateTime *time.Time                                           `json:"LastUpdateDateTime"`
	NumberReceived     *int64                                               `json:"NumberReceived"`
	NumberRequired     *int64                                               `json:"NumberRequired"`
	Status             ObWriteFileResponse3DataMultiAuthorisationStatusEnum `json:"Status"`
}

type ObWriteFileResponse3DataStatusEnum string

const (
	ObWriteFileResponse3DataStatusEnumInitiationCompleted ObWriteFileResponse3DataStatusEnum = "InitiationCompleted"
	ObWriteFileResponse3DataStatusEnumInitiationFailed    ObWriteFileResponse3DataStatusEnum = "InitiationFailed"
	ObWriteFileResponse3DataStatusEnumInitiationPending   ObWriteFileResponse3DataStatusEnum = "InitiationPending"
)

type ObWriteFileResponse3Data struct {
	Charges              []ObWriteFileResponse3DataCharges           `json:"Charges"`
	ConsentID            string                                      `json:"ConsentId"`
	CreationDateTime     time.Time                                   `json:"CreationDateTime"`
	Debtor               *ObCashAccountDebtor4                       `json:"Debtor"`
	FilePaymentID        string                                      `json:"FilePaymentId"`
	Initiation           ObWriteFileResponse3DataInitiation          `json:"Initiation"`
	MultiAuthorisation   *ObWriteFileResponse3DataMultiAuthorisation `json:"MultiAuthorisation"`
	Status               ObWriteFileResponse3DataStatusEnum          `json:"Status"`
	StatusUpdateDateTime time.Time                                   `json:"StatusUpdateDateTime"`
}

type ObWriteFileResponse3 struct {
	Data  ObWriteFileResponse3Data `json:"Data"`
	Links *Links                   `json:"Links"`
	Meta  *Meta                    `json:"Meta"`
}
