package shared

import (
	"time"
)

type ObWriteInternationalResponse5DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnumActual     ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalResponse5DataExchangeRateInformation struct {
	ContractIdentification *string                                                              `json:"ContractIdentification"`
	ExchangeRate           float64                                                              `json:"ExchangeRate"`
	ExpirationDateTime     *time.Time                                                           `json:"ExpirationDateTime"`
	RateType               ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                               `json:"UnitCurrency"`
}

type ObWriteInternationalResponse5DataInitiationCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalResponse5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalResponse5DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalResponse5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalResponse5DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                        `json:"ContractIdentification"`
	ExchangeRate           *float64                                                                       `json:"ExchangeRate"`
	RateType               ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                         `json:"UnitCurrency"`
}

type ObWriteInternationalResponse5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalResponse5DataInitiationInstructionPriorityEnumNormal ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalResponse5DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum = "Urgent"
)

type ObWriteInternationalResponse5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteInternationalResponse5DataInitiation struct {
	ChargeBearer              *ObChargeBearerType1CodeEnum                                        `json:"ChargeBearer"`
	Creditor                  *ObWriteInternationalResponse5DataInitiationCreditor                `json:"Creditor"`
	CreditorAccount           ObWriteInternationalResponse5DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent             *ObWriteInternationalResponse5DataInitiationCreditorAgent           `json:"CreditorAgent"`
	CurrencyOfTransfer        string                                                              `json:"CurrencyOfTransfer"`
	DebtorAccount             *ObWriteInternationalResponse5DataInitiationDebtorAccount           `json:"DebtorAccount"`
	DestinationCountryCode    *string                                                             `json:"DestinationCountryCode"`
	EndToEndIdentification    string                                                              `json:"EndToEndIdentification"`
	ExchangeRateInformation   *ObWriteInternationalResponse5DataInitiationExchangeRateInformation `json:"ExchangeRateInformation"`
	ExtendedPurpose           *string                                                             `json:"ExtendedPurpose"`
	InstructedAmount          ObWriteInternationalResponse5DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification string                                                              `json:"InstructionIdentification"`
	InstructionPriority       *ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum `json:"InstructionPriority"`
	LocalInstrument           *string                                                             `json:"LocalInstrument"`
	Purpose                   *string                                                             `json:"Purpose"`
	RemittanceInformation     *ObWriteInternationalResponse5DataInitiationRemittanceInformation   `json:"RemittanceInformation"`
	SupplementaryData         map[string]interface{}                                              `json:"SupplementaryData"`
}

type ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum string

const (
	ObWriteInternationalResponse5DataMultiAuthorisationStatusEnumAuthorised                   ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteInternationalResponse5DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteInternationalResponse5DataMultiAuthorisationStatusEnumRejected                     ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum = "Rejected"
)

type ObWriteInternationalResponse5DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                                    `json:"ExpirationDateTime"`
	LastUpdateDateTime *time.Time                                                    `json:"LastUpdateDateTime"`
	NumberReceived     *int64                                                        `json:"NumberReceived"`
	NumberRequired     *int64                                                        `json:"NumberRequired"`
	Status             ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum `json:"Status"`
}

type ObWriteInternationalResponse5DataRefundAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalResponse5DataRefundAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalResponse5DataRefundCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalResponse5DataRefund struct {
	Account  ObWriteInternationalResponse5DataRefundAccount   `json:"Account"`
	Agent    *ObWriteInternationalResponse5DataRefundAgent    `json:"Agent"`
	Creditor *ObWriteInternationalResponse5DataRefundCreditor `json:"Creditor"`
}

type ObWriteInternationalResponse5DataStatusEnum string

const (
	ObWriteInternationalResponse5DataStatusEnumAcceptedCreditSettlementCompleted ObWriteInternationalResponse5DataStatusEnum = "AcceptedCreditSettlementCompleted"
	ObWriteInternationalResponse5DataStatusEnumAcceptedSettlementCompleted       ObWriteInternationalResponse5DataStatusEnum = "AcceptedSettlementCompleted"
	ObWriteInternationalResponse5DataStatusEnumAcceptedSettlementInProcess       ObWriteInternationalResponse5DataStatusEnum = "AcceptedSettlementInProcess"
	ObWriteInternationalResponse5DataStatusEnumAcceptedWithoutPosting            ObWriteInternationalResponse5DataStatusEnum = "AcceptedWithoutPosting"
	ObWriteInternationalResponse5DataStatusEnumPending                           ObWriteInternationalResponse5DataStatusEnum = "Pending"
	ObWriteInternationalResponse5DataStatusEnumRejected                          ObWriteInternationalResponse5DataStatusEnum = "Rejected"
)

type ObWriteInternationalResponse5Data struct {
	Charges                    []ObWriteInternationalResponse5DataCharges                `json:"Charges"`
	ConsentID                  string                                                    `json:"ConsentId"`
	CreationDateTime           time.Time                                                 `json:"CreationDateTime"`
	Debtor                     *ObCashAccountDebtor4                                     `json:"Debtor"`
	ExchangeRateInformation    *ObWriteInternationalResponse5DataExchangeRateInformation `json:"ExchangeRateInformation"`
	ExpectedExecutionDateTime  *time.Time                                                `json:"ExpectedExecutionDateTime"`
	ExpectedSettlementDateTime *time.Time                                                `json:"ExpectedSettlementDateTime"`
	Initiation                 ObWriteInternationalResponse5DataInitiation               `json:"Initiation"`
	InternationalPaymentID     string                                                    `json:"InternationalPaymentId"`
	MultiAuthorisation         *ObWriteInternationalResponse5DataMultiAuthorisation      `json:"MultiAuthorisation"`
	Refund                     *ObWriteInternationalResponse5DataRefund                  `json:"Refund"`
	Status                     ObWriteInternationalResponse5DataStatusEnum               `json:"Status"`
	StatusUpdateDateTime       time.Time                                                 `json:"StatusUpdateDateTime"`
}

type ObWriteInternationalResponse5 struct {
	Data  ObWriteInternationalResponse5Data `json:"Data"`
	Links *Links                            `json:"Links"`
	Meta  *Meta                             `json:"Meta"`
}
