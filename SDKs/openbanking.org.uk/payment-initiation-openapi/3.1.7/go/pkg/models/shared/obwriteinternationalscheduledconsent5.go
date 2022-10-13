package shared

import (
	"time"
)

type ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnumAny    ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteInternationalScheduledConsent5DataAuthorisation struct {
	AuthorisationType  ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                                  `json:"CompletionDateTime"`
}

type ObWriteInternationalScheduledConsent5DataInitiationCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                                `json:"ContractIdentification"`
	ExchangeRate           *float64                                                                               `json:"ExchangeRate"`
	RateType               ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                                 `json:"UnitCurrency"`
}

type ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnumNormal ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum = "Urgent"
)

type ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteInternationalScheduledConsent5DataInitiation struct {
	ChargeBearer               *ObChargeBearerType1CodeEnum                                                `json:"ChargeBearer"`
	Creditor                   *ObWriteInternationalScheduledConsent5DataInitiationCreditor                `json:"Creditor"`
	CreditorAccount            ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent              *ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent           `json:"CreditorAgent"`
	CurrencyOfTransfer         string                                                                      `json:"CurrencyOfTransfer"`
	DebtorAccount              *ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount           `json:"DebtorAccount"`
	DestinationCountryCode     *string                                                                     `json:"DestinationCountryCode"`
	EndToEndIdentification     *string                                                                     `json:"EndToEndIdentification"`
	ExchangeRateInformation    *ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation `json:"ExchangeRateInformation"`
	ExtendedPurpose            *string                                                                     `json:"ExtendedPurpose"`
	InstructedAmount           ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification  string                                                                      `json:"InstructionIdentification"`
	InstructionPriority        *ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum `json:"InstructionPriority"`
	LocalInstrument            *string                                                                     `json:"LocalInstrument"`
	Purpose                    *string                                                                     `json:"Purpose"`
	RemittanceInformation      *ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation   `json:"RemittanceInformation"`
	RequestedExecutionDateTime time.Time                                                                   `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                                      `json:"SupplementaryData"`
}

type ObWriteInternationalScheduledConsent5DataPermissionEnum string

const (
	ObWriteInternationalScheduledConsent5DataPermissionEnumCreate ObWriteInternationalScheduledConsent5DataPermissionEnum = "Create"
)

type ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum string

const (
	ObWriteInternationalScheduledConsent5DataReadRefundAccountEnumNo  ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum = "No"
	ObWriteInternationalScheduledConsent5DataReadRefundAccountEnumYes ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum = "Yes"
)

type ObWriteInternationalScheduledConsent5Data struct {
	Authorisation     *ObWriteInternationalScheduledConsent5DataAuthorisation         `json:"Authorisation"`
	Initiation        ObWriteInternationalScheduledConsent5DataInitiation             `json:"Initiation"`
	Permission        ObWriteInternationalScheduledConsent5DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount *ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum `json:"ReadRefundAccount"`
	ScaSupportData    *ObscaSupportData1                                              `json:"SCASupportData"`
}

type ObWriteInternationalScheduledConsent5 struct {
	Data ObWriteInternationalScheduledConsent5Data `json:"Data"`
	Risk ObRisk1                                   `json:"Risk"`
}
