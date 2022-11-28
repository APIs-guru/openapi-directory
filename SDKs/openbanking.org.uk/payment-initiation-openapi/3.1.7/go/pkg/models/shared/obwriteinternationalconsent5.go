package shared

import (
	"time"
)

type ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnumAny    ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteInternationalConsent5DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteInternationalConsent5DataAuthorisation struct {
	AuthorisationType  ObWriteInternationalConsent5DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                         `json:"CompletionDateTime,omitempty"`
}

// ObWriteInternationalConsent5DataInitiationCreditor
// Party to which an amount of money is due.
type ObWriteInternationalConsent5DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

// ObWriteInternationalConsent5DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteInternationalConsent5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalConsent5DataInitiationCreditorAgent
// Financial institution servicing an account for the creditor.
type ObWriteInternationalConsent5DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalConsent5DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
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

// ObWriteInternationalConsent5DataInitiationExchangeRateInformation
// Provides details on the currency exchange rate and contract.
type ObWriteInternationalConsent5DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                       `json:"ContractIdentification,omitempty"`
	ExchangeRate           *float64                                                                      `json:"ExchangeRate,omitempty"`
	RateType               ObWriteInternationalConsent5DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                        `json:"UnitCurrency"`
}

// ObWriteInternationalConsent5DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteInternationalConsent5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalConsent5DataInitiationInstructionPriorityEnumNormal ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalConsent5DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalConsent5DataInitiationInstructionPriorityEnum = "Urgent"
)

// ObWriteInternationalConsent5DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteInternationalConsent5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteInternationalConsent5DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
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
