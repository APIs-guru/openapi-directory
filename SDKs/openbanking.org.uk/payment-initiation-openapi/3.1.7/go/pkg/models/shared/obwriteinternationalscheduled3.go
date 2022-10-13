package shared

import (
	"time"
)

type ObWriteInternationalScheduled3DataInitiationCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalScheduled3DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalScheduled3DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalScheduled3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalScheduled3DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                         `json:"ContractIdentification"`
	ExchangeRate           *float64                                                                        `json:"ExchangeRate"`
	RateType               ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                          `json:"UnitCurrency"`
}

type ObWriteInternationalScheduled3DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnumNormal ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum = "Urgent"
)

type ObWriteInternationalScheduled3DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteInternationalScheduled3DataInitiation struct {
	ChargeBearer               *ObChargeBearerType1CodeEnum                                         `json:"ChargeBearer"`
	Creditor                   *ObWriteInternationalScheduled3DataInitiationCreditor                `json:"Creditor"`
	CreditorAccount            ObWriteInternationalScheduled3DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent              *ObWriteInternationalScheduled3DataInitiationCreditorAgent           `json:"CreditorAgent"`
	CurrencyOfTransfer         string                                                               `json:"CurrencyOfTransfer"`
	DebtorAccount              *ObWriteInternationalScheduled3DataInitiationDebtorAccount           `json:"DebtorAccount"`
	DestinationCountryCode     *string                                                              `json:"DestinationCountryCode"`
	EndToEndIdentification     *string                                                              `json:"EndToEndIdentification"`
	ExchangeRateInformation    *ObWriteInternationalScheduled3DataInitiationExchangeRateInformation `json:"ExchangeRateInformation"`
	ExtendedPurpose            *string                                                              `json:"ExtendedPurpose"`
	InstructedAmount           ObWriteInternationalScheduled3DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification  string                                                               `json:"InstructionIdentification"`
	InstructionPriority        *ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum `json:"InstructionPriority"`
	LocalInstrument            *string                                                              `json:"LocalInstrument"`
	Purpose                    *string                                                              `json:"Purpose"`
	RemittanceInformation      *ObWriteInternationalScheduled3DataInitiationRemittanceInformation   `json:"RemittanceInformation"`
	RequestedExecutionDateTime time.Time                                                            `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                               `json:"SupplementaryData"`
}

type ObWriteInternationalScheduled3Data struct {
	ConsentID  string                                       `json:"ConsentId"`
	Initiation ObWriteInternationalScheduled3DataInitiation `json:"Initiation"`
}

type ObWriteInternationalScheduled3 struct {
	Data ObWriteInternationalScheduled3Data `json:"Data"`
	Risk ObRisk1                            `json:"Risk"`
}
