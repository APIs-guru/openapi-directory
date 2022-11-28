package shared

import (
	"time"
)

type ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnumAny    ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteInternationalScheduledConsent5DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteInternationalScheduledConsent5DataAuthorisation struct {
	AuthorisationType  ObWriteInternationalScheduledConsent5DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                                  `json:"CompletionDateTime,omitempty"`
}

// ObWriteInternationalScheduledConsent5DataInitiationCreditor
// Party to which an amount of money is due.
type ObWriteInternationalScheduledConsent5DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

// ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent
// Financial institution servicing an account for the creditor.
type ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

// ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation
// Provides details on the currency exchange rate and contract.
type ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                                `json:"ContractIdentification,omitempty"`
	ExchangeRate           *float64                                                                               `json:"ExchangeRate,omitempty"`
	RateType               ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                                 `json:"UnitCurrency"`
}

// ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnumNormal ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum = "Urgent"
)

// ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteInternationalScheduledConsent5DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
type ObWriteInternationalScheduledConsent5DataInitiation struct {
	ChargeBearer               *ObChargeBearerType1CodeEnum                                                `json:"ChargeBearer,omitempty"`
	Creditor                   *ObWriteInternationalScheduledConsent5DataInitiationCreditor                `json:"Creditor,omitempty"`
	CreditorAccount            ObWriteInternationalScheduledConsent5DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent              *ObWriteInternationalScheduledConsent5DataInitiationCreditorAgent           `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer         string                                                                      `json:"CurrencyOfTransfer"`
	DebtorAccount              *ObWriteInternationalScheduledConsent5DataInitiationDebtorAccount           `json:"DebtorAccount,omitempty"`
	DestinationCountryCode     *string                                                                     `json:"DestinationCountryCode,omitempty"`
	EndToEndIdentification     *string                                                                     `json:"EndToEndIdentification,omitempty"`
	ExchangeRateInformation    *ObWriteInternationalScheduledConsent5DataInitiationExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
	ExtendedPurpose            *string                                                                     `json:"ExtendedPurpose,omitempty"`
	InstructedAmount           ObWriteInternationalScheduledConsent5DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification  string                                                                      `json:"InstructionIdentification"`
	InstructionPriority        *ObWriteInternationalScheduledConsent5DataInitiationInstructionPriorityEnum `json:"InstructionPriority,omitempty"`
	LocalInstrument            *string                                                                     `json:"LocalInstrument,omitempty"`
	Purpose                    *string                                                                     `json:"Purpose,omitempty"`
	RemittanceInformation      *ObWriteInternationalScheduledConsent5DataInitiationRemittanceInformation   `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime time.Time                                                                   `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                                      `json:"SupplementaryData,omitempty"`
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
	Authorisation     *ObWriteInternationalScheduledConsent5DataAuthorisation         `json:"Authorisation,omitempty"`
	Initiation        ObWriteInternationalScheduledConsent5DataInitiation             `json:"Initiation"`
	Permission        ObWriteInternationalScheduledConsent5DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount *ObWriteInternationalScheduledConsent5DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData    *ObscaSupportData1                                              `json:"SCASupportData,omitempty"`
}

type ObWriteInternationalScheduledConsent5 struct {
	Data ObWriteInternationalScheduledConsent5Data `json:"Data"`
	Risk ObRisk1                                   `json:"Risk"`
}
