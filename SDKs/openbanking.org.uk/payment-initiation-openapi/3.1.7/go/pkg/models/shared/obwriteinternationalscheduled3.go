package shared

import (
	"time"
)

// ObWriteInternationalScheduled3DataInitiationCreditor
// Party to which an amount of money is due.
type ObWriteInternationalScheduled3DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

// ObWriteInternationalScheduled3DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteInternationalScheduled3DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalScheduled3DataInitiationCreditorAgent
// Financial institution servicing an account for the creditor.
type ObWriteInternationalScheduled3DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalScheduled3DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
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

// ObWriteInternationalScheduled3DataInitiationExchangeRateInformation
// Provides details on the currency exchange rate and contract.
type ObWriteInternationalScheduled3DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                         `json:"ContractIdentification,omitempty"`
	ExchangeRate           *float64                                                                        `json:"ExchangeRate,omitempty"`
	RateType               ObWriteInternationalScheduled3DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                          `json:"UnitCurrency"`
}

// ObWriteInternationalScheduled3DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteInternationalScheduled3DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnumNormal ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalScheduled3DataInitiationInstructionPriorityEnum = "Urgent"
)

// ObWriteInternationalScheduled3DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteInternationalScheduled3DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteInternationalScheduled3DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
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
