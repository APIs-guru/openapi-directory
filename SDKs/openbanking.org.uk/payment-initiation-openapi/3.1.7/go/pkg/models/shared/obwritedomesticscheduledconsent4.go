package shared

import (
	"time"
)

type ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnumAny    ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnumSingle ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteDomesticScheduledConsent4DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteDomesticScheduledConsent4DataAuthorisation struct {
	AuthorisationType  ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                             `json:"CompletionDateTime,omitempty"`
}

// ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteDomesticScheduledConsent4DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
type ObWriteDomesticScheduledConsent4DataInitiation struct {
	CreditorAccount            ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress      *ObPostalAddress6                                                    `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount              *ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification     *string                                                              `json:"EndToEndIdentification,omitempty"`
	InstructedAmount           ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification  string                                                               `json:"InstructionIdentification"`
	LocalInstrument            *string                                                              `json:"LocalInstrument,omitempty"`
	RemittanceInformation      *ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime time.Time                                                            `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                               `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticScheduledConsent4DataPermissionEnum string

const (
	ObWriteDomesticScheduledConsent4DataPermissionEnumCreate ObWriteDomesticScheduledConsent4DataPermissionEnum = "Create"
)

type ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum string

const (
	ObWriteDomesticScheduledConsent4DataReadRefundAccountEnumNo  ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum = "No"
	ObWriteDomesticScheduledConsent4DataReadRefundAccountEnumYes ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum = "Yes"
)

type ObWriteDomesticScheduledConsent4Data struct {
	Authorisation     *ObWriteDomesticScheduledConsent4DataAuthorisation         `json:"Authorisation,omitempty"`
	Initiation        ObWriteDomesticScheduledConsent4DataInitiation             `json:"Initiation"`
	Permission        ObWriteDomesticScheduledConsent4DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount *ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData    *ObscaSupportData1                                         `json:"SCASupportData,omitempty"`
}

type ObWriteDomesticScheduledConsent4 struct {
	Data ObWriteDomesticScheduledConsent4Data `json:"Data"`
	Risk ObRisk1                              `json:"Risk"`
}
