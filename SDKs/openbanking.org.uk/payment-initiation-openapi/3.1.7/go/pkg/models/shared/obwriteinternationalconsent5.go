package shared

import (
	"time"
)

type ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnumAny    ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteInternationalConsent5DataAuthorisation struct {
	AuthorisationType  ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                         `json:"CompletionDateTime,omitempty"`
}

type ObWriteInternationalConsent5DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

type ObWriteInternationalConsent5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalConsent5DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

type ObWriteInternationalConsent5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalConsent5DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                       `json:"ContractIdentification,omitempty"`
	ExchangeRate           *float64                                                                      `json:"ExchangeRate,omitempty"`
	RateType               ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                        `json:"UnitCurrency"`
}

type ObWriteInternationalConsent5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalConsent5DataInitiationInstructionPriorityEnumNormal ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalConsent5DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum = "Urgent"
)

type ObWriteInternationalConsent5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

type ObWriteInternationalConsent5DataInitiation struct {
	ChargeBearer              *ObChargeBearerType1CodeEnum                                       `json:"ChargeBearer,omitempty"`
	Creditor                  *ObWriteInternationalConsent5DataInitiationCreditor                `json:"Creditor,omitempty"`
	CreditorAccount           ObWriteInternationalConsent5DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent             *ObWriteInternationalConsent5DataInitiationCreditorAgent           `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer        string                                                             `json:"CurrencyOfTransfer"`
	DebtorAccount             *ObWriteInternationalConsent5DataInitiationDebtorAccount           `json:"DebtorAccount,omitempty"`
	DestinationCountryCode    *string                                                            `json:"DestinationCountryCode,omitempty"`
	EndToEndIdentification    string                                                             `json:"EndToEndIdentification"`
	ExchangeRateInformation   *ObWriteInternationalConsent5DataInitiationExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
	ExtendedPurpose           *string                                                            `json:"ExtendedPurpose,omitempty"`
	InstructedAmount          ObWriteInternationalConsent5DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification string                                                             `json:"InstructionIdentification"`
	InstructionPriority       *ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum `json:"InstructionPriority,omitempty"`
	LocalInstrument           *string                                                            `json:"LocalInstrument,omitempty"`
	Purpose                   *string                                                            `json:"Purpose,omitempty"`
	RemittanceInformation     *ObWriteInternationalConsent5DataInitiationRemittanceInformation   `json:"RemittanceInformation,omitempty"`
	SupplementaryData         map[string]interface{}                                             `json:"SupplementaryData,omitempty"`
}

type ObWriteInternationalConsent5DataReadRefundAccountEnum string

const (
	ObWriteInternationalConsent5DataReadRefundAccountEnumNo  ObWriteInternationalConsent5DataReadRefundAccountEnum = "No"
	ObWriteInternationalConsent5DataReadRefundAccountEnumYes ObWriteInternationalConsent5DataReadRefundAccountEnum = "Yes"
)

type ObWriteInternationalConsent5Data struct {
	Authorisation     *ObWriteInternationalConsent5DataAuthorisation         `json:"Authorisation,omitempty"`
	Initiation        ObWriteInternationalConsent5DataInitiation             `json:"Initiation"`
	ReadRefundAccount *ObWriteInternationalConsent5DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData    *ObscaSupportData1                                     `json:"SCASupportData,omitempty"`
}

type ObWriteInternationalConsent5 struct {
	Data ObWriteInternationalConsent5Data `json:"Data"`
	Risk ObRisk1                          `json:"Risk"`
}
