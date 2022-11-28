package shared

import (
	"time"
)

// ObWriteInternationalStandingOrderResponse7DataCharges
// Set of elements used to provide details of a charge for the payment initiation.
type ObWriteInternationalStandingOrderResponse7DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

// ObWriteInternationalStandingOrderResponse7DataInitiationCreditor
// Party to which an amount of money is due.
type ObWriteInternationalStandingOrderResponse7DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

// ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount
// Provides the details to identify the beneficiary account.
type ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent
// Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
// This is the servicer of the beneficiary account.
type ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteInternationalStandingOrderResponse7DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
type ObWriteInternationalStandingOrderResponse7DataInitiation struct {
	ChargeBearer           *ObChargeBearerType1CodeEnum                                             `json:"ChargeBearer,omitempty"`
	Creditor               *ObWriteInternationalStandingOrderResponse7DataInitiationCreditor        `json:"Creditor,omitempty"`
	CreditorAccount        ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAccount  `json:"CreditorAccount"`
	CreditorAgent          *ObWriteInternationalStandingOrderResponse7DataInitiationCreditorAgent   `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer     string                                                                   `json:"CurrencyOfTransfer"`
	DebtorAccount          *ObWriteInternationalStandingOrderResponse7DataInitiationDebtorAccount   `json:"DebtorAccount,omitempty"`
	DestinationCountryCode *string                                                                  `json:"DestinationCountryCode,omitempty"`
	ExtendedPurpose        *string                                                                  `json:"ExtendedPurpose,omitempty"`
	FinalPaymentDateTime   *time.Time                                                               `json:"FinalPaymentDateTime,omitempty"`
	FirstPaymentDateTime   time.Time                                                                `json:"FirstPaymentDateTime"`
	Frequency              string                                                                   `json:"Frequency"`
	InstructedAmount       ObWriteInternationalStandingOrderResponse7DataInitiationInstructedAmount `json:"InstructedAmount"`
	NumberOfPayments       *string                                                                  `json:"NumberOfPayments,omitempty"`
	Purpose                *string                                                                  `json:"Purpose,omitempty"`
	Reference              *string                                                                  `json:"Reference,omitempty"`
	SupplementaryData      map[string]interface{}                                                   `json:"SupplementaryData,omitempty"`
}

type ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum string

const (
	ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnumAuthorised                   ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnumRejected                     ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum = "Rejected"
)

// ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation
// The multiple authorisation flow response from the ASPSP.
type ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                                                 `json:"ExpirationDateTime,omitempty"`
	LastUpdateDateTime *time.Time                                                                 `json:"LastUpdateDateTime,omitempty"`
	NumberReceived     *int64                                                                     `json:"NumberReceived,omitempty"`
	NumberRequired     *int64                                                                     `json:"NumberRequired,omitempty"`
	Status             ObWriteInternationalStandingOrderResponse7DataMultiAuthorisationStatusEnum `json:"Status"`
}

// ObWriteInternationalStandingOrderResponse7DataRefundAccount
// Provides the details to identify an account.
type ObWriteInternationalStandingOrderResponse7DataRefundAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalStandingOrderResponse7DataRefundAgent
// Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
type ObWriteInternationalStandingOrderResponse7DataRefundAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalStandingOrderResponse7DataRefundCreditor
// Set of elements used to identify a person or an organisation.
type ObWriteInternationalStandingOrderResponse7DataRefundCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

type ObWriteInternationalStandingOrderResponse7DataRefund struct {
	Account  ObWriteInternationalStandingOrderResponse7DataRefundAccount   `json:"Account"`
	Agent    *ObWriteInternationalStandingOrderResponse7DataRefundAgent    `json:"Agent,omitempty"`
	Creditor *ObWriteInternationalStandingOrderResponse7DataRefundCreditor `json:"Creditor,omitempty"`
}

type ObWriteInternationalStandingOrderResponse7DataStatusEnum string

const (
	ObWriteInternationalStandingOrderResponse7DataStatusEnumCancelled           ObWriteInternationalStandingOrderResponse7DataStatusEnum = "Cancelled"
	ObWriteInternationalStandingOrderResponse7DataStatusEnumInitiationCompleted ObWriteInternationalStandingOrderResponse7DataStatusEnum = "InitiationCompleted"
	ObWriteInternationalStandingOrderResponse7DataStatusEnumInitiationFailed    ObWriteInternationalStandingOrderResponse7DataStatusEnum = "InitiationFailed"
	ObWriteInternationalStandingOrderResponse7DataStatusEnumInitiationPending   ObWriteInternationalStandingOrderResponse7DataStatusEnum = "InitiationPending"
)

type ObWriteInternationalStandingOrderResponse7Data struct {
	Charges                      []ObWriteInternationalStandingOrderResponse7DataCharges           `json:"Charges,omitempty"`
	ConsentID                    string                                                            `json:"ConsentId"`
	CreationDateTime             time.Time                                                         `json:"CreationDateTime"`
	Debtor                       *ObCashAccountDebtor4                                             `json:"Debtor,omitempty"`
	Initiation                   ObWriteInternationalStandingOrderResponse7DataInitiation          `json:"Initiation"`
	InternationalStandingOrderID string                                                            `json:"InternationalStandingOrderId"`
	MultiAuthorisation           *ObWriteInternationalStandingOrderResponse7DataMultiAuthorisation `json:"MultiAuthorisation,omitempty"`
	Refund                       *ObWriteInternationalStandingOrderResponse7DataRefund             `json:"Refund,omitempty"`
	Status                       ObWriteInternationalStandingOrderResponse7DataStatusEnum          `json:"Status"`
	StatusUpdateDateTime         time.Time                                                         `json:"StatusUpdateDateTime"`
}

type ObWriteInternationalStandingOrderResponse7 struct {
	Data  ObWriteInternationalStandingOrderResponse7Data `json:"Data"`
	Links *Links                                         `json:"Links,omitempty"`
	Meta  *Meta                                          `json:"Meta,omitempty"`
}
