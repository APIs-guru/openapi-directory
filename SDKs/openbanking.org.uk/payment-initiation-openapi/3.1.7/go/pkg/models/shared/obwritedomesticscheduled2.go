package shared

import (
	"time"
)

// ObWriteDomesticScheduled2DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteDomesticScheduled2DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticScheduled2DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteDomesticScheduled2DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticScheduled2DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteDomesticScheduled2DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticScheduled2DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteDomesticScheduled2DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteDomesticScheduled2DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
type ObWriteDomesticScheduled2DataInitiation struct {
	CreditorAccount            ObWriteDomesticScheduled2DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress      *ObPostalAddress6                                             `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount              *ObWriteDomesticScheduled2DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification     *string                                                       `json:"EndToEndIdentification,omitempty"`
	InstructedAmount           ObWriteDomesticScheduled2DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification  string                                                        `json:"InstructionIdentification"`
	LocalInstrument            *string                                                       `json:"LocalInstrument,omitempty"`
	RemittanceInformation      *ObWriteDomesticScheduled2DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime time.Time                                                     `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                        `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticScheduled2Data struct {
	ConsentID  string                                  `json:"ConsentId"`
	Initiation ObWriteDomesticScheduled2DataInitiation `json:"Initiation"`
}

type ObWriteDomesticScheduled2 struct {
	Data ObWriteDomesticScheduled2Data `json:"Data"`
	Risk ObRisk1                       `json:"Risk"`
}
