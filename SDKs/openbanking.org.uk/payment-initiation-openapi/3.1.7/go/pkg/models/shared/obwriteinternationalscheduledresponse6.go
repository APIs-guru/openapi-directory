package shared

import (
	"time"
)

type ObWriteInternationalScheduledResponse6DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnumActual     ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalScheduledResponse6DataExchangeRateInformation struct {
	ContractIdentification *string                                                                       `json:"ContractIdentification"`
	ExchangeRate           float64                                                                       `json:"ExchangeRate"`
	ExpirationDateTime     *time.Time                                                                    `json:"ExpirationDateTime"`
	RateType               ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                        `json:"UnitCurrency"`
}

type ObWriteInternationalScheduledResponse6DataInitiationCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                                 `json:"ContractIdentification"`
	ExchangeRate           *float64                                                                                `json:"ExchangeRate"`
	RateType               ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                                  `json:"UnitCurrency"`
}

type ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnumNormal ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum = "Urgent"
)

type ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteInternationalScheduledResponse6DataInitiation struct {
	ChargeBearer               *ObChargeBearerType1CodeEnum                                                 `json:"ChargeBearer"`
	Creditor                   *ObWriteInternationalScheduledResponse6DataInitiationCreditor                `json:"Creditor"`
	CreditorAccount            ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent              *ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent           `json:"CreditorAgent"`
	CurrencyOfTransfer         string                                                                       `json:"CurrencyOfTransfer"`
	DebtorAccount              *ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount           `json:"DebtorAccount"`
	DestinationCountryCode     *string                                                                      `json:"DestinationCountryCode"`
	EndToEndIdentification     *string                                                                      `json:"EndToEndIdentification"`
	ExchangeRateInformation    *ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation `json:"ExchangeRateInformation"`
	ExtendedPurpose            *string                                                                      `json:"ExtendedPurpose"`
	InstructedAmount           ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification  string                                                                       `json:"InstructionIdentification"`
	InstructionPriority        *ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum `json:"InstructionPriority"`
	LocalInstrument            *string                                                                      `json:"LocalInstrument"`
	Purpose                    *string                                                                      `json:"Purpose"`
	RemittanceInformation      *ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation   `json:"RemittanceInformation"`
	RequestedExecutionDateTime time.Time                                                                    `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                                       `json:"SupplementaryData"`
}

type ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum string

const (
	ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnumAuthorised                   ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnumRejected                     ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum = "Rejected"
)

type ObWriteInternationalScheduledResponse6DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                                             `json:"ExpirationDateTime"`
	LastUpdateDateTime *time.Time                                                             `json:"LastUpdateDateTime"`
	NumberReceived     *int64                                                                 `json:"NumberReceived"`
	NumberRequired     *int64                                                                 `json:"NumberRequired"`
	Status             ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum `json:"Status"`
}

type ObWriteInternationalScheduledResponse6DataRefundAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalScheduledResponse6DataRefundAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalScheduledResponse6DataRefundCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalScheduledResponse6DataRefund struct {
	Account  ObWriteInternationalScheduledResponse6DataRefundAccount   `json:"Account"`
	Agent    *ObWriteInternationalScheduledResponse6DataRefundAgent    `json:"Agent"`
	Creditor *ObWriteInternationalScheduledResponse6DataRefundCreditor `json:"Creditor"`
}

type ObWriteInternationalScheduledResponse6DataStatusEnum string

const (
	ObWriteInternationalScheduledResponse6DataStatusEnumCancelled           ObWriteInternationalScheduledResponse6DataStatusEnum = "Cancelled"
	ObWriteInternationalScheduledResponse6DataStatusEnumInitiationCompleted ObWriteInternationalScheduledResponse6DataStatusEnum = "InitiationCompleted"
	ObWriteInternationalScheduledResponse6DataStatusEnumInitiationFailed    ObWriteInternationalScheduledResponse6DataStatusEnum = "InitiationFailed"
	ObWriteInternationalScheduledResponse6DataStatusEnumInitiationPending   ObWriteInternationalScheduledResponse6DataStatusEnum = "InitiationPending"
)

type ObWriteInternationalScheduledResponse6Data struct {
	Charges                         []ObWriteInternationalScheduledResponse6DataCharges                `json:"Charges"`
	ConsentID                       string                                                             `json:"ConsentId"`
	CreationDateTime                time.Time                                                          `json:"CreationDateTime"`
	Debtor                          *ObCashAccountDebtor4                                              `json:"Debtor"`
	ExchangeRateInformation         *ObWriteInternationalScheduledResponse6DataExchangeRateInformation `json:"ExchangeRateInformation"`
	ExpectedExecutionDateTime       *time.Time                                                         `json:"ExpectedExecutionDateTime"`
	ExpectedSettlementDateTime      *time.Time                                                         `json:"ExpectedSettlementDateTime"`
	Initiation                      ObWriteInternationalScheduledResponse6DataInitiation               `json:"Initiation"`
	InternationalScheduledPaymentID string                                                             `json:"InternationalScheduledPaymentId"`
	MultiAuthorisation              *ObWriteInternationalScheduledResponse6DataMultiAuthorisation      `json:"MultiAuthorisation"`
	Refund                          *ObWriteInternationalScheduledResponse6DataRefund                  `json:"Refund"`
	Status                          ObWriteInternationalScheduledResponse6DataStatusEnum               `json:"Status"`
	StatusUpdateDateTime            time.Time                                                          `json:"StatusUpdateDateTime"`
}

type ObWriteInternationalScheduledResponse6 struct {
	Data  ObWriteInternationalScheduledResponse6Data `json:"Data"`
	Links *Links                                     `json:"Links"`
	Meta  *Meta                                      `json:"Meta"`
}
