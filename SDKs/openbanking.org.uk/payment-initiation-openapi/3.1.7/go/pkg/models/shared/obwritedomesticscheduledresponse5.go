package shared

import (
	"time"
)

type ObWriteDomesticScheduledResponse5DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteDomesticScheduledResponse5DataInitiation struct {
	CreditorAccount            ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress      *ObPostalAddress6                                                     `json:"CreditorPostalAddress"`
	DebtorAccount              *ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount         `json:"DebtorAccount"`
	EndToEndIdentification     *string                                                               `json:"EndToEndIdentification"`
	InstructedAmount           ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification  string                                                                `json:"InstructionIdentification"`
	LocalInstrument            *string                                                               `json:"LocalInstrument"`
	RemittanceInformation      *ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation `json:"RemittanceInformation"`
	RequestedExecutionDateTime time.Time                                                             `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                                `json:"SupplementaryData"`
}

type ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum string

const (
	ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnumAuthorised                   ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnumRejected                     ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum = "Rejected"
)

type ObWriteDomesticScheduledResponse5DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                                        `json:"ExpirationDateTime"`
	LastUpdateDateTime *time.Time                                                        `json:"LastUpdateDateTime"`
	NumberReceived     *int64                                                            `json:"NumberReceived"`
	NumberRequired     *int64                                                            `json:"NumberRequired"`
	Status             ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum `json:"Status"`
}

type ObWriteDomesticScheduledResponse5DataRefundAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticScheduledResponse5DataRefund struct {
	Account ObWriteDomesticScheduledResponse5DataRefundAccount `json:"Account"`
}

type ObWriteDomesticScheduledResponse5DataStatusEnum string

const (
	ObWriteDomesticScheduledResponse5DataStatusEnumCancelled           ObWriteDomesticScheduledResponse5DataStatusEnum = "Cancelled"
	ObWriteDomesticScheduledResponse5DataStatusEnumInitiationCompleted ObWriteDomesticScheduledResponse5DataStatusEnum = "InitiationCompleted"
	ObWriteDomesticScheduledResponse5DataStatusEnumInitiationFailed    ObWriteDomesticScheduledResponse5DataStatusEnum = "InitiationFailed"
	ObWriteDomesticScheduledResponse5DataStatusEnumInitiationPending   ObWriteDomesticScheduledResponse5DataStatusEnum = "InitiationPending"
)

type ObWriteDomesticScheduledResponse5Data struct {
	Charges                    []ObWriteDomesticScheduledResponse5DataCharges           `json:"Charges"`
	ConsentID                  string                                                   `json:"ConsentId"`
	CreationDateTime           time.Time                                                `json:"CreationDateTime"`
	Debtor                     *ObCashAccountDebtor4                                    `json:"Debtor"`
	DomesticScheduledPaymentID string                                                   `json:"DomesticScheduledPaymentId"`
	ExpectedExecutionDateTime  *time.Time                                               `json:"ExpectedExecutionDateTime"`
	ExpectedSettlementDateTime *time.Time                                               `json:"ExpectedSettlementDateTime"`
	Initiation                 ObWriteDomesticScheduledResponse5DataInitiation          `json:"Initiation"`
	MultiAuthorisation         *ObWriteDomesticScheduledResponse5DataMultiAuthorisation `json:"MultiAuthorisation"`
	Refund                     *ObWriteDomesticScheduledResponse5DataRefund             `json:"Refund"`
	Status                     ObWriteDomesticScheduledResponse5DataStatusEnum          `json:"Status"`
	StatusUpdateDateTime       time.Time                                                `json:"StatusUpdateDateTime"`
}

type ObWriteDomesticScheduledResponse5 struct {
	Data  ObWriteDomesticScheduledResponse5Data `json:"Data"`
	Links *Links                                `json:"Links"`
	Meta  *Meta                                 `json:"Meta"`
}
