package shared

import (
	"time"
)

type ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnumAny    ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnumSingle ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteDomesticConsent4DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteDomesticConsent4DataAuthorisation struct {
	AuthorisationType  ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                    `json:"CompletionDateTime,omitempty"`
}

// ObWriteDomesticConsent4DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteDomesticConsent4DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticConsent4DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteDomesticConsent4DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticConsent4DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteDomesticConsent4DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticConsent4DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteDomesticConsent4DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteDomesticConsent4DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
type ObWriteDomesticConsent4DataInitiation struct {
	CreditorAccount           ObWriteDomesticConsent4DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress     *ObPostalAddress6                                           `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount             *ObWriteDomesticConsent4DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification    string                                                      `json:"EndToEndIdentification"`
	InstructedAmount          ObWriteDomesticConsent4DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification string                                                      `json:"InstructionIdentification"`
	LocalInstrument           *string                                                     `json:"LocalInstrument,omitempty"`
	RemittanceInformation     *ObWriteDomesticConsent4DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	SupplementaryData         map[string]interface{}                                      `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticConsent4DataReadRefundAccountEnum string

const (
	ObWriteDomesticConsent4DataReadRefundAccountEnumNo  ObWriteDomesticConsent4DataReadRefundAccountEnum = "No"
	ObWriteDomesticConsent4DataReadRefundAccountEnumYes ObWriteDomesticConsent4DataReadRefundAccountEnum = "Yes"
)

type ObWriteDomesticConsent4Data struct {
	Authorisation     *ObWriteDomesticConsent4DataAuthorisation         `json:"Authorisation,omitempty"`
	Initiation        ObWriteDomesticConsent4DataInitiation             `json:"Initiation"`
	ReadRefundAccount *ObWriteDomesticConsent4DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData    *ObscaSupportData1                                `json:"SCASupportData,omitempty"`
}

type ObWriteDomesticConsent4 struct {
	Data ObWriteDomesticConsent4Data `json:"Data"`
	Risk ObRisk1                     `json:"Risk"`
}
