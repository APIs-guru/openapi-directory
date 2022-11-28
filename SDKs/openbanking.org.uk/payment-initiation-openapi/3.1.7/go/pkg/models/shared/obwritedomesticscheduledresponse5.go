package shared

import (
	"time"
)

// ObWriteDomesticScheduledResponse5DataCharges
// Set of elements used to provide details of a charge for the payment initiation.
type ObWriteDomesticScheduledResponse5DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

// ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteDomesticScheduledResponse5DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
type ObWriteDomesticScheduledResponse5DataInitiation struct {
	CreditorAccount            ObWriteDomesticScheduledResponse5DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress      *ObPostalAddress6                                                     `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount              *ObWriteDomesticScheduledResponse5DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification     *string                                                               `json:"EndToEndIdentification,omitempty"`
	InstructedAmount           ObWriteDomesticScheduledResponse5DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification  string                                                                `json:"InstructionIdentification"`
	LocalInstrument            *string                                                               `json:"LocalInstrument,omitempty"`
	RemittanceInformation      *ObWriteDomesticScheduledResponse5DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime time.Time                                                             `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                                `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum string

const (
	ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnumAuthorised                   ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnumRejected                     ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum = "Rejected"
)

// ObWriteDomesticScheduledResponse5DataMultiAuthorisation
// The multiple authorisation flow response from the ASPSP.
type ObWriteDomesticScheduledResponse5DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                                        `json:"ExpirationDateTime,omitempty"`
	LastUpdateDateTime *time.Time                                                        `json:"LastUpdateDateTime,omitempty"`
	NumberReceived     *int64                                                            `json:"NumberReceived,omitempty"`
	NumberRequired     *int64                                                            `json:"NumberRequired,omitempty"`
	Status             ObWriteDomesticScheduledResponse5DataMultiAuthorisationStatusEnum `json:"Status"`
}

// ObWriteDomesticScheduledResponse5DataRefundAccount
// Provides the details to identify an account.
type ObWriteDomesticScheduledResponse5DataRefundAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticScheduledResponse5DataRefund
// Unambiguous identification of the refund account to which a refund will be made as a result of the transaction.
type ObWriteDomesticScheduledResponse5DataRefund struct {
	Account ObWriteDomesticScheduledResponse5DataRefundAccount `json:"Account"`
}

type ObWriteDomesticScheduledResponse5DataStatusEnum string

const (
	ObWriteDomesticScheduledResponse5DataStatusEnumCancelled           ObWriteDomesticScheduledResponse5DataStatusEnum = "Cancelled"
	ObWriteDomesticScheduledResponse5DataStatusEnumInitiationCompleted ObWriteDomesticScheduledResponse5DataStatusEnum = "InitiationCompleted"
	ObWriteDomesticScheduledResponse5DataStatusEnumInitiationFailed    ObWriteDomesticScheduledResponse5DataStatusEnum = "InitiationFailed"
	ObWriteDomesticScheduledResponse5DataStatusEnumInitiationPending   ObWriteDomesticScheduledResponse5DataStatusEnum = "InitiationPending"
)

type ObWriteDomesticScheduledResponse5Data struct {
	Charges                    []ObWriteDomesticScheduledResponse5DataCharges           `json:"Charges,omitempty"`
	ConsentID                  string                                                   `json:"ConsentId"`
	CreationDateTime           time.Time                                                `json:"CreationDateTime"`
	Debtor                     *ObCashAccountDebtor4                                    `json:"Debtor,omitempty"`
	DomesticScheduledPaymentID string                                                   `json:"DomesticScheduledPaymentId"`
	ExpectedExecutionDateTime  *time.Time                                               `json:"ExpectedExecutionDateTime,omitempty"`
	ExpectedSettlementDateTime *time.Time                                               `json:"ExpectedSettlementDateTime,omitempty"`
	Initiation                 ObWriteDomesticScheduledResponse5DataInitiation          `json:"Initiation"`
	MultiAuthorisation         *ObWriteDomesticScheduledResponse5DataMultiAuthorisation `json:"MultiAuthorisation,omitempty"`
	Refund                     *ObWriteDomesticScheduledResponse5DataRefund             `json:"Refund,omitempty"`
	Status                     ObWriteDomesticScheduledResponse5DataStatusEnum          `json:"Status"`
	StatusUpdateDateTime       time.Time                                                `json:"StatusUpdateDateTime"`
}

type ObWriteDomesticScheduledResponse5 struct {
	Data  ObWriteDomesticScheduledResponse5Data `json:"Data"`
	Links *Links                                `json:"Links,omitempty"`
	Meta  *Meta                                 `json:"Meta,omitempty"`
}
