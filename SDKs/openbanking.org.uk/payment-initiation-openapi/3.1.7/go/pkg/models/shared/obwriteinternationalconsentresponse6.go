package shared

import (
	"time"
)

type ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnumAny    ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteInternationalConsentResponse6DataAuthorisation struct {
	AuthorisationType  ObWriteInternationalConsentResponse6DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                                 `json:"CompletionDateTime,omitempty"`
}

type ObWriteInternationalConsentResponse6DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnumActual     ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalConsentResponse6DataExchangeRateInformation struct {
	ContractIdentification *string                                                                     `json:"ContractIdentification,omitempty"`
	ExchangeRate           float64                                                                     `json:"ExchangeRate"`
	ExpirationDateTime     *time.Time                                                                  `json:"ExpirationDateTime,omitempty"`
	RateType               ObWriteInternationalConsentResponse6DataExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                      `json:"UnitCurrency"`
}

type ObWriteInternationalConsentResponse6DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

type ObWriteInternationalConsentResponse6DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalConsentResponse6DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

type ObWriteInternationalConsentResponse6DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                               `json:"ContractIdentification,omitempty"`
	ExchangeRate           *float64                                                                              `json:"ExchangeRate,omitempty"`
	RateType               ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                                `json:"UnitCurrency"`
}

type ObWriteInternationalConsentResponse6DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnumNormal ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum = "Urgent"
)

type ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

type ObWriteInternationalConsentResponse6DataInitiation struct {
	ChargeBearer              *ObChargeBearerType1CodeEnum                                               `json:"ChargeBearer,omitempty"`
	Creditor                  *ObWriteInternationalConsentResponse6DataInitiationCreditor                `json:"Creditor,omitempty"`
	CreditorAccount           ObWriteInternationalConsentResponse6DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent             *ObWriteInternationalConsentResponse6DataInitiationCreditorAgent           `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer        string                                                                     `json:"CurrencyOfTransfer"`
	DebtorAccount             *ObWriteInternationalConsentResponse6DataInitiationDebtorAccount           `json:"DebtorAccount,omitempty"`
	DestinationCountryCode    *string                                                                    `json:"DestinationCountryCode,omitempty"`
	EndToEndIdentification    string                                                                     `json:"EndToEndIdentification"`
	ExchangeRateInformation   *ObWriteInternationalConsentResponse6DataInitiationExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
	ExtendedPurpose           *string                                                                    `json:"ExtendedPurpose,omitempty"`
	InstructedAmount          ObWriteInternationalConsentResponse6DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification string                                                                     `json:"InstructionIdentification"`
	InstructionPriority       *ObWriteInternationalConsentResponse6DataInitiationInstructionPriorityEnum `json:"InstructionPriority,omitempty"`
	LocalInstrument           *string                                                                    `json:"LocalInstrument,omitempty"`
	Purpose                   *string                                                                    `json:"Purpose,omitempty"`
	RemittanceInformation     *ObWriteInternationalConsentResponse6DataInitiationRemittanceInformation   `json:"RemittanceInformation,omitempty"`
	SupplementaryData         map[string]interface{}                                                     `json:"SupplementaryData,omitempty"`
}

type ObWriteInternationalConsentResponse6DataReadRefundAccountEnum string

const (
	ObWriteInternationalConsentResponse6DataReadRefundAccountEnumNo  ObWriteInternationalConsentResponse6DataReadRefundAccountEnum = "No"
	ObWriteInternationalConsentResponse6DataReadRefundAccountEnumYes ObWriteInternationalConsentResponse6DataReadRefundAccountEnum = "Yes"
)

type ObWriteInternationalConsentResponse6DataStatusEnum string

const (
	ObWriteInternationalConsentResponse6DataStatusEnumAuthorised            ObWriteInternationalConsentResponse6DataStatusEnum = "Authorised"
	ObWriteInternationalConsentResponse6DataStatusEnumAwaitingAuthorisation ObWriteInternationalConsentResponse6DataStatusEnum = "AwaitingAuthorisation"
	ObWriteInternationalConsentResponse6DataStatusEnumConsumed              ObWriteInternationalConsentResponse6DataStatusEnum = "Consumed"
	ObWriteInternationalConsentResponse6DataStatusEnumRejected              ObWriteInternationalConsentResponse6DataStatusEnum = "Rejected"
)

type ObWriteInternationalConsentResponse6Data struct {
	Authorisation              *ObWriteInternationalConsentResponse6DataAuthorisation           `json:"Authorisation,omitempty"`
	Charges                    []ObWriteInternationalConsentResponse6DataCharges                `json:"Charges,omitempty"`
	ConsentID                  string                                                           `json:"ConsentId"`
	CreationDateTime           time.Time                                                        `json:"CreationDateTime"`
	CutOffDateTime             *time.Time                                                       `json:"CutOffDateTime,omitempty"`
	Debtor                     *ObCashAccountDebtor4                                            `json:"Debtor,omitempty"`
	ExchangeRateInformation    *ObWriteInternationalConsentResponse6DataExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
	ExpectedExecutionDateTime  *time.Time                                                       `json:"ExpectedExecutionDateTime,omitempty"`
	ExpectedSettlementDateTime *time.Time                                                       `json:"ExpectedSettlementDateTime,omitempty"`
	Initiation                 ObWriteInternationalConsentResponse6DataInitiation               `json:"Initiation"`
	ReadRefundAccount          *ObWriteInternationalConsentResponse6DataReadRefundAccountEnum   `json:"ReadRefundAccount,omitempty"`
	ScaSupportData             *ObscaSupportData1                                               `json:"SCASupportData,omitempty"`
	Status                     ObWriteInternationalConsentResponse6DataStatusEnum               `json:"Status"`
	StatusUpdateDateTime       time.Time                                                        `json:"StatusUpdateDateTime"`
}

type ObWriteInternationalConsentResponse6 struct {
	Data  ObWriteInternationalConsentResponse6Data `json:"Data"`
	Links *Links                                   `json:"Links,omitempty"`
	Meta  *Meta                                    `json:"Meta,omitempty"`
	Risk  ObRisk1                                  `json:"Risk"`
}
