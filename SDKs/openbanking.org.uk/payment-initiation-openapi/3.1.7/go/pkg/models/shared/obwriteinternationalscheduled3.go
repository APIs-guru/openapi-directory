package shared

import (
	"time"
)

type ObWriteInternationalScheduled3DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

type ObWriteInternationalScheduled3DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalScheduled3DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

type ObWriteInternationalScheduled3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternationalScheduled3DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                         `json:"ContractIdentification,omitempty"`
	ExchangeRate           *float64                                                                        `json:"ExchangeRate,omitempty"`
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
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

type ObWriteInternationalScheduled3DataInitiation struct {
	ChargeBearer               *ObChargeBearerType1CodeEnum                                         `json:"ChargeBearer,omitempty"`
	Creditor                   *ObWriteInternationalScheduled3DataInitiationCreditor                `json:"Creditor,omitempty"`
	CreditorAccount            ObWriteInternationalScheduled3DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent              *ObWriteInternationalScheduled3DataInitiationCreditorAgent           `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer         string                                                               `json:"CurrencyOfTransfer"`
	DebtorAccount              *ObWriteInternationalScheduled3DataInitiationDebtorAccount           `json:"DebtorAccount,omitempty"`
	DestinationCountryCode     *string                                                              `json:"DestinationCountryCode,omitempty"`
	EndToEndIdentification     *string                                                              `json:"EndToEndIdentification,omitempty"`
	ExchangeRateInformation    *ObWriteInternationalScheduled3DataInitiationExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
	ExtendedPurpose            *string                                                              `json:"ExtendedPurpose,omitempty"`
	InstructedAmount           ObWriteInternationalScheduled3DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification  string                                                               `json:"InstructionIdentification"`
	InstructionPriority        *ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum `json:"InstructionPriority,omitempty"`
	LocalInstrument            *string                                                              `json:"LocalInstrument,omitempty"`
	Purpose                    *string                                                              `json:"Purpose,omitempty"`
	RemittanceInformation      *ObWriteInternationalScheduled3DataInitiationRemittanceInformation   `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime time.Time                                                            `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                               `json:"SupplementaryData,omitempty"`
}

type ObWriteInternationalScheduled3Data struct {
	ConsentID  string                                       `json:"ConsentId"`
	Initiation ObWriteInternationalScheduled3DataInitiation `json:"Initiation"`
}

type ObWriteInternationalScheduled3 struct {
	Data ObWriteInternationalScheduled3Data `json:"Data"`
	Risk ObRisk1                            `json:"Risk"`
}
