package shared

import (
	"time"
)

type ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnumAny    ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteInternationalStandingOrderConsent6DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteInternationalStandingOrderConsent6DataAuthorisation struct {
	AuthorisationType  ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                                      `json:"CompletionDateTime,omitempty"`
}

// ObWriteInternationalStandingOrderConsent6DataInitiationCreditor
// Party to which an amount of money is due.
type ObWriteInternationalStandingOrderConsent6DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

// ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount
// Provides the details to identify the beneficiary account.
type ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent
// Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
// This is the servicer of the beneficiary account.
type ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount
// Provides the details to identify the debtor account.
type ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteInternationalStandingOrderConsent6DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
type ObWriteInternationalStandingOrderConsent6DataInitiation struct {
	ChargeBearer           *ObChargeBearerType1CodeEnum                                            `json:"ChargeBearer,omitempty"`
	Creditor               *ObWriteInternationalStandingOrderConsent6DataInitiationCreditor        `json:"Creditor,omitempty"`
	CreditorAccount        ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount  `json:"CreditorAccount"`
	CreditorAgent          *ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent   `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer     string                                                                  `json:"CurrencyOfTransfer"`
	DebtorAccount          *ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount   `json:"DebtorAccount,omitempty"`
	DestinationCountryCode *string                                                                 `json:"DestinationCountryCode,omitempty"`
	ExtendedPurpose        *string                                                                 `json:"ExtendedPurpose,omitempty"`
	FinalPaymentDateTime   *time.Time                                                              `json:"FinalPaymentDateTime,omitempty"`
	FirstPaymentDateTime   time.Time                                                               `json:"FirstPaymentDateTime"`
	Frequency              string                                                                  `json:"Frequency"`
	InstructedAmount       ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount `json:"InstructedAmount"`
	NumberOfPayments       *string                                                                 `json:"NumberOfPayments,omitempty"`
	Purpose                *string                                                                 `json:"Purpose,omitempty"`
	Reference              *string                                                                 `json:"Reference,omitempty"`
	SupplementaryData      map[string]interface{}                                                  `json:"SupplementaryData,omitempty"`
}

type ObWriteInternationalStandingOrderConsent6DataPermissionEnum string

const (
	ObWriteInternationalStandingOrderConsent6DataPermissionEnumCreate ObWriteInternationalStandingOrderConsent6DataPermissionEnum = "Create"
)

type ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum string

const (
	ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnumNo  ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum = "No"
	ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnumYes ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum = "Yes"
)

type ObWriteInternationalStandingOrderConsent6Data struct {
	Authorisation     *ObWriteInternationalStandingOrderConsent6DataAuthorisation         `json:"Authorisation,omitempty"`
	Initiation        ObWriteInternationalStandingOrderConsent6DataInitiation             `json:"Initiation"`
	Permission        ObWriteInternationalStandingOrderConsent6DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount *ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData    *ObscaSupportData1                                                  `json:"SCASupportData,omitempty"`
}

type ObWriteInternationalStandingOrderConsent6 struct {
	Data ObWriteInternationalStandingOrderConsent6Data `json:"Data"`
	Risk ObRisk1                                       `json:"Risk"`
}
