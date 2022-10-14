package shared

import (
	"time"
)

type ObWriteDomesticResponse5DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteDomesticResponse5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticResponse5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticResponse5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticResponse5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

type ObWriteDomesticResponse5DataInitiation struct {
	CreditorAccount           ObWriteDomesticResponse5DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress     *ObPostalAddress6                                            `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount             *ObWriteDomesticResponse5DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification    string                                                       `json:"EndToEndIdentification"`
	InstructedAmount          ObWriteDomesticResponse5DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification string                                                       `json:"InstructionIdentification"`
	LocalInstrument           *string                                                      `json:"LocalInstrument,omitempty"`
	RemittanceInformation     *ObWriteDomesticResponse5DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	SupplementaryData         map[string]interface{}                                       `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum string

const (
	ObWriteDomesticResponse5DataMultiAuthorisationStatusEnumAuthorised                   ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteDomesticResponse5DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteDomesticResponse5DataMultiAuthorisationStatusEnumRejected                     ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum = "Rejected"
)

type ObWriteDomesticResponse5DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                               `json:"ExpirationDateTime,omitempty"`
	LastUpdateDateTime *time.Time                                               `json:"LastUpdateDateTime,omitempty"`
	NumberReceived     *int64                                                   `json:"NumberReceived,omitempty"`
	NumberRequired     *int64                                                   `json:"NumberRequired,omitempty"`
	Status             ObWriteDomesticResponse5DataMultiAuthorisationStatusEnum `json:"Status"`
}

type ObWriteDomesticResponse5DataRefundAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticResponse5DataRefund struct {
	Account ObWriteDomesticResponse5DataRefundAccount `json:"Account"`
}

type ObWriteDomesticResponse5DataStatusEnum string

const (
	ObWriteDomesticResponse5DataStatusEnumAcceptedCreditSettlementCompleted ObWriteDomesticResponse5DataStatusEnum = "AcceptedCreditSettlementCompleted"
	ObWriteDomesticResponse5DataStatusEnumAcceptedSettlementCompleted       ObWriteDomesticResponse5DataStatusEnum = "AcceptedSettlementCompleted"
	ObWriteDomesticResponse5DataStatusEnumAcceptedSettlementInProcess       ObWriteDomesticResponse5DataStatusEnum = "AcceptedSettlementInProcess"
	ObWriteDomesticResponse5DataStatusEnumAcceptedWithoutPosting            ObWriteDomesticResponse5DataStatusEnum = "AcceptedWithoutPosting"
	ObWriteDomesticResponse5DataStatusEnumPending                           ObWriteDomesticResponse5DataStatusEnum = "Pending"
	ObWriteDomesticResponse5DataStatusEnumRejected                          ObWriteDomesticResponse5DataStatusEnum = "Rejected"
)

type ObWriteDomesticResponse5Data struct {
	Charges                    []ObWriteDomesticResponse5DataCharges           `json:"Charges,omitempty"`
	ConsentID                  string                                          `json:"ConsentId"`
	CreationDateTime           time.Time                                       `json:"CreationDateTime"`
	Debtor                     *ObCashAccountDebtor4                           `json:"Debtor,omitempty"`
	DomesticPaymentID          string                                          `json:"DomesticPaymentId"`
	ExpectedExecutionDateTime  *time.Time                                      `json:"ExpectedExecutionDateTime,omitempty"`
	ExpectedSettlementDateTime *time.Time                                      `json:"ExpectedSettlementDateTime,omitempty"`
	Initiation                 ObWriteDomesticResponse5DataInitiation          `json:"Initiation"`
	MultiAuthorisation         *ObWriteDomesticResponse5DataMultiAuthorisation `json:"MultiAuthorisation,omitempty"`
	Refund                     *ObWriteDomesticResponse5DataRefund             `json:"Refund,omitempty"`
	Status                     ObWriteDomesticResponse5DataStatusEnum          `json:"Status"`
	StatusUpdateDateTime       time.Time                                       `json:"StatusUpdateDateTime"`
}

type ObWriteDomesticResponse5 struct {
	Data  ObWriteDomesticResponse5Data `json:"Data"`
	Links *Links                       `json:"Links,omitempty"`
	Meta  *Meta                        `json:"Meta,omitempty"`
}
