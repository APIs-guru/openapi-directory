package shared

import (
	"time"
)

// ObWriteInternationalStandingOrder4DataInitiationCreditor
// Party to which an amount of money is due.
type ObWriteInternationalStandingOrder4DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

// ObWriteInternationalStandingOrder4DataInitiationCreditorAccount
// Provides the details to identify the beneficiary account.
type ObWriteInternationalStandingOrder4DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalStandingOrder4DataInitiationCreditorAgent
// Party that manages the account on behalf of the account owner, that is manages the registration and booking of entries on the account, calculates balances on the account and provides information about the account.
// This is the servicer of the beneficiary account.
type ObWriteInternationalStandingOrder4DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalStandingOrder4DataInitiationDebtorAccount
// Provides the details to identify the debtor account.
type ObWriteInternationalStandingOrder4DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalStandingOrder4DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteInternationalStandingOrder4DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteInternationalStandingOrder4DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for an international standing order.
type ObWriteInternationalStandingOrder4DataInitiation struct {
	ChargeBearer           *ObChargeBearerType1CodeEnum                                     `json:"ChargeBearer,omitempty"`
	Creditor               *ObWriteInternationalStandingOrder4DataInitiationCreditor        `json:"Creditor,omitempty"`
	CreditorAccount        ObWriteInternationalStandingOrder4DataInitiationCreditorAccount  `json:"CreditorAccount"`
	CreditorAgent          *ObWriteInternationalStandingOrder4DataInitiationCreditorAgent   `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer     string                                                           `json:"CurrencyOfTransfer"`
	DebtorAccount          *ObWriteInternationalStandingOrder4DataInitiationDebtorAccount   `json:"DebtorAccount,omitempty"`
	DestinationCountryCode *string                                                          `json:"DestinationCountryCode,omitempty"`
	ExtendedPurpose        *string                                                          `json:"ExtendedPurpose,omitempty"`
	FinalPaymentDateTime   *time.Time                                                       `json:"FinalPaymentDateTime,omitempty"`
	FirstPaymentDateTime   time.Time                                                        `json:"FirstPaymentDateTime"`
	Frequency              string                                                           `json:"Frequency"`
	InstructedAmount       ObWriteInternationalStandingOrder4DataInitiationInstructedAmount `json:"InstructedAmount"`
	NumberOfPayments       *string                                                          `json:"NumberOfPayments,omitempty"`
	Purpose                *string                                                          `json:"Purpose,omitempty"`
	Reference              *string                                                          `json:"Reference,omitempty"`
	SupplementaryData      map[string]interface{}                                           `json:"SupplementaryData,omitempty"`
}

type ObWriteInternationalStandingOrder4Data struct {
	ConsentID  string                                           `json:"ConsentId"`
	Initiation ObWriteInternationalStandingOrder4DataInitiation `json:"Initiation"`
}

type ObWriteInternationalStandingOrder4 struct {
	Data ObWriteInternationalStandingOrder4Data `json:"Data"`
	Risk ObRisk1                                `json:"Risk"`
}
