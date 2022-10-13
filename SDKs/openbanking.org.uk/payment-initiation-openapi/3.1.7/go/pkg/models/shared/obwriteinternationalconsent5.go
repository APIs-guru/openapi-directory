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
	CompletionDateTime *time.Time                                                         `json:"CompletionDateTime"`
}

type ObWriteInternationalConsent5DataInitiationCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalConsent5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalConsent5DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalConsent5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalConsent5DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                       `json:"ContractIdentification"`
	ExchangeRate           *float64                                                                      `json:"ExchangeRate"`
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
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteInternationalConsent5DataInitiation struct {
	ChargeBearer              *ObChargeBearerType1CodeEnum                                       `json:"ChargeBearer"`
	Creditor                  *ObWriteInternationalConsent5DataInitiationCreditor                `json:"Creditor"`
	CreditorAccount           ObWriteInternationalConsent5DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent             *ObWriteInternationalConsent5DataInitiationCreditorAgent           `json:"CreditorAgent"`
	CurrencyOfTransfer        string                                                             `json:"CurrencyOfTransfer"`
	DebtorAccount             *ObWriteInternationalConsent5DataInitiationDebtorAccount           `json:"DebtorAccount"`
	DestinationCountryCode    *string                                                            `json:"DestinationCountryCode"`
	EndToEndIdentification    string                                                             `json:"EndToEndIdentification"`
	ExchangeRateInformation   *ObWriteInternationalConsent5DataInitiationExchangeRateInformation `json:"ExchangeRateInformation"`
	ExtendedPurpose           *string                                                            `json:"ExtendedPurpose"`
	InstructedAmount          ObWriteInternationalConsent5DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification string                                                             `json:"InstructionIdentification"`
	InstructionPriority       *ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum `json:"InstructionPriority"`
	LocalInstrument           *string                                                            `json:"LocalInstrument"`
	Purpose                   *string                                                            `json:"Purpose"`
	RemittanceInformation     *ObWriteInternationalConsent5DataInitiationRemittanceInformation   `json:"RemittanceInformation"`
	SupplementaryData         map[string]interface{}                                             `json:"SupplementaryData"`
}

type ObWriteInternationalConsent5DataReadRefundAccountEnum string

const (
	ObWriteInternationalConsent5DataReadRefundAccountEnumNo  ObWriteInternationalConsent5DataReadRefundAccountEnum = "No"
	ObWriteInternationalConsent5DataReadRefundAccountEnumYes ObWriteInternationalConsent5DataReadRefundAccountEnum = "Yes"
)

type ObWriteInternationalConsent5Data struct {
	Authorisation     *ObWriteInternationalConsent5DataAuthorisation         `json:"Authorisation"`
	Initiation        ObWriteInternationalConsent5DataInitiation             `json:"Initiation"`
	ReadRefundAccount *ObWriteInternationalConsent5DataReadRefundAccountEnum `json:"ReadRefundAccount"`
	ScaSupportData    *ObscaSupportData1                                     `json:"SCASupportData"`
}

type ObWriteInternationalConsent5 struct {
	Data ObWriteInternationalConsent5Data `json:"Data"`
	Risk ObRisk1                          `json:"Risk"`
}
