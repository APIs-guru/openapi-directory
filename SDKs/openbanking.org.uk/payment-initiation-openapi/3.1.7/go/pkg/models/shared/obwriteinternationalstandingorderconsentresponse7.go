package shared

import (
	"time"
)

type ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnumAny    ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation struct {
	AuthorisationType  ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                                              `json:"CompletionDateTime,omitempty"`
}

// ObWriteInternationalStandingOrderConsentResponse7DataCharges
// Set of elements used to provide details of a charge for the payment initiation.
type ObWriteInternationalStandingOrderConsentResponse7DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

// ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor
// Party to which an amount of money is due.
type ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

// ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount
// Provides the details to identify the beneficiary account.
type ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent
// Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
// This is the servicer of the beneficiary account.
type ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteInternationalStandingOrderConsentResponse7DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
type ObWriteInternationalStandingOrderConsentResponse7DataInitiation struct {
	ChargeBearer           *ObChargeBearerType1CodeEnum                                                    `json:"ChargeBearer,omitempty"`
	Creditor               *ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor        `json:"Creditor,omitempty"`
	CreditorAccount        ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount  `json:"CreditorAccount"`
	CreditorAgent          *ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent   `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer     string                                                                          `json:"CurrencyOfTransfer"`
	DebtorAccount          *ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount   `json:"DebtorAccount,omitempty"`
	DestinationCountryCode *string                                                                         `json:"DestinationCountryCode,omitempty"`
	ExtendedPurpose        *string                                                                         `json:"ExtendedPurpose,omitempty"`
	FinalPaymentDateTime   *time.Time                                                                      `json:"FinalPaymentDateTime,omitempty"`
	FirstPaymentDateTime   time.Time                                                                       `json:"FirstPaymentDateTime"`
	Frequency              string                                                                          `json:"Frequency"`
	InstructedAmount       ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount `json:"InstructedAmount"`
	NumberOfPayments       *string                                                                         `json:"NumberOfPayments,omitempty"`
	Purpose                *string                                                                         `json:"Purpose,omitempty"`
	Reference              *string                                                                         `json:"Reference,omitempty"`
	SupplementaryData      map[string]interface{}                                                          `json:"SupplementaryData,omitempty"`
}

type ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum string

const (
	ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnumCreate ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum = "Create"
)

type ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum string

const (
	ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnumNo  ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum = "No"
	ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnumYes ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum = "Yes"
)

type ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum string

const (
	ObWriteInternationalStandingOrderConsentResponse7DataStatusEnumAuthorised            ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = "Authorised"
	ObWriteInternationalStandingOrderConsentResponse7DataStatusEnumAwaitingAuthorisation ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = "AwaitingAuthorisation"
	ObWriteInternationalStandingOrderConsentResponse7DataStatusEnumConsumed              ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = "Consumed"
	ObWriteInternationalStandingOrderConsentResponse7DataStatusEnumRejected              ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum = "Rejected"
)

type ObWriteInternationalStandingOrderConsentResponse7Data struct {
	Authorisation        *ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation         `json:"Authorisation,omitempty"`
	Charges              []ObWriteInternationalStandingOrderConsentResponse7DataCharges              `json:"Charges,omitempty"`
	ConsentID            string                                                                      `json:"ConsentId"`
	CreationDateTime     time.Time                                                                   `json:"CreationDateTime"`
	CutOffDateTime       *time.Time                                                                  `json:"CutOffDateTime,omitempty"`
	Debtor               *ObCashAccountDebtor4                                                       `json:"Debtor,omitempty"`
	Initiation           ObWriteInternationalStandingOrderConsentResponse7DataInitiation             `json:"Initiation"`
	Permission           ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount    *ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData       *ObscaSupportData1                                                          `json:"SCASupportData,omitempty"`
	Status               ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum             `json:"Status"`
	StatusUpdateDateTime time.Time                                                                   `json:"StatusUpdateDateTime"`
}

type ObWriteInternationalStandingOrderConsentResponse7 struct {
	Data  ObWriteInternationalStandingOrderConsentResponse7Data `json:"Data"`
	Links *Links                                                `json:"Links,omitempty"`
	Meta  *Meta                                                 `json:"Meta,omitempty"`
	Risk  ObRisk1                                               `json:"Risk"`
}
