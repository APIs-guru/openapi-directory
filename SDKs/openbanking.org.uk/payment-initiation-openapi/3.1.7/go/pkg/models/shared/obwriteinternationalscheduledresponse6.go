package shared

import (
	"time"
)

// ObWriteInternationalScheduledResponse6DataCharges
// Set of elements used to provide details of a charge for the payment initiation.
type ObWriteInternationalScheduledResponse6DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnumActual     ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum = "Indicative"
)

// ObWriteInternationalScheduledResponse6DataExchangeRateInformation
// Further detailed information on the exchange rate that has been used in the payment transaction.
type ObWriteInternationalScheduledResponse6DataExchangeRateInformation struct {
	ContractIdentification *string                                                                       `json:"ContractIdentification,omitempty"`
	ExchangeRate           float64                                                                       `json:"ExchangeRate"`
	ExpirationDateTime     *time.Time                                                                    `json:"ExpirationDateTime,omitempty"`
	RateType               ObWriteInternationalScheduledResponse6DataExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                        `json:"UnitCurrency"`
}

// ObWriteInternationalScheduledResponse6DataInitiationCreditor
// Party to which an amount of money is due.
type ObWriteInternationalScheduledResponse6DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

// ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent
// Financial institution servicing an account for the creditor.
type ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

// ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation
// Provides details on the currency exchange rate and contract.
type ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                                 `json:"ContractIdentification,omitempty"`
	ExchangeRate           *float64                                                                                `json:"ExchangeRate,omitempty"`
	RateType               ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                                  `json:"UnitCurrency"`
}

// ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnumNormal ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum = "Urgent"
)

// ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteInternationalScheduledResponse6DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled international payment.
type ObWriteInternationalScheduledResponse6DataInitiation struct {
	ChargeBearer               *ObChargeBearerType1CodeEnum                                                 `json:"ChargeBearer,omitempty"`
	Creditor                   *ObWriteInternationalScheduledResponse6DataInitiationCreditor                `json:"Creditor,omitempty"`
	CreditorAccount            ObWriteInternationalScheduledResponse6DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent              *ObWriteInternationalScheduledResponse6DataInitiationCreditorAgent           `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer         string                                                                       `json:"CurrencyOfTransfer"`
	DebtorAccount              *ObWriteInternationalScheduledResponse6DataInitiationDebtorAccount           `json:"DebtorAccount,omitempty"`
	DestinationCountryCode     *string                                                                      `json:"DestinationCountryCode,omitempty"`
	EndToEndIdentification     *string                                                                      `json:"EndToEndIdentification,omitempty"`
	ExchangeRateInformation    *ObWriteInternationalScheduledResponse6DataInitiationExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
	ExtendedPurpose            *string                                                                      `json:"ExtendedPurpose,omitempty"`
	InstructedAmount           ObWriteInternationalScheduledResponse6DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification  string                                                                       `json:"InstructionIdentification"`
	InstructionPriority        *ObWriteInternationalScheduledResponse6DataInitiationInstructionPriorityEnum `json:"InstructionPriority,omitempty"`
	LocalInstrument            *string                                                                      `json:"LocalInstrument,omitempty"`
	Purpose                    *string                                                                      `json:"Purpose,omitempty"`
	RemittanceInformation      *ObWriteInternationalScheduledResponse6DataInitiationRemittanceInformation   `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime time.Time                                                                    `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                                       `json:"SupplementaryData,omitempty"`
}

type ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum string

const (
	ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnumAuthorised                   ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnumRejected                     ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum = "Rejected"
)

// ObWriteInternationalScheduledResponse6DataMultiAuthorisation
// The multiple authorisation flow response from the ASPSP.
type ObWriteInternationalScheduledResponse6DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                                             `json:"ExpirationDateTime,omitempty"`
	LastUpdateDateTime *time.Time                                                             `json:"LastUpdateDateTime,omitempty"`
	NumberReceived     *int64                                                                 `json:"NumberReceived,omitempty"`
	NumberRequired     *int64                                                                 `json:"NumberRequired,omitempty"`
	Status             ObWriteInternationalScheduledResponse6DataMultiAuthorisationStatusEnum `json:"Status"`
}

// ObWriteInternationalScheduledResponse6DataRefundAccount
// Provides the details to identify an account.
type ObWriteInternationalScheduledResponse6DataRefundAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalScheduledResponse6DataRefundAgent
// Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
type ObWriteInternationalScheduledResponse6DataRefundAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalScheduledResponse6DataRefundCreditor
// Set of elements used to identify a person or an organisation.
type ObWriteInternationalScheduledResponse6DataRefundCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

type ObWriteInternationalScheduledResponse6DataRefund struct {
	Account  ObWriteInternationalScheduledResponse6DataRefundAccount   `json:"Account"`
	Agent    *ObWriteInternationalScheduledResponse6DataRefundAgent    `json:"Agent,omitempty"`
	Creditor *ObWriteInternationalScheduledResponse6DataRefundCreditor `json:"Creditor,omitempty"`
}

type ObWriteInternationalScheduledResponse6DataStatusEnum string

const (
	ObWriteInternationalScheduledResponse6DataStatusEnumCancelled           ObWriteInternationalScheduledResponse6DataStatusEnum = "Cancelled"
	ObWriteInternationalScheduledResponse6DataStatusEnumInitiationCompleted ObWriteInternationalScheduledResponse6DataStatusEnum = "InitiationCompleted"
	ObWriteInternationalScheduledResponse6DataStatusEnumInitiationFailed    ObWriteInternationalScheduledResponse6DataStatusEnum = "InitiationFailed"
	ObWriteInternationalScheduledResponse6DataStatusEnumInitiationPending   ObWriteInternationalScheduledResponse6DataStatusEnum = "InitiationPending"
)

type ObWriteInternationalScheduledResponse6Data struct {
	Charges                         []ObWriteInternationalScheduledResponse6DataCharges                `json:"Charges,omitempty"`
	ConsentID                       string                                                             `json:"ConsentId"`
	CreationDateTime                time.Time                                                          `json:"CreationDateTime"`
	Debtor                          *ObCashAccountDebtor4                                              `json:"Debtor,omitempty"`
	ExchangeRateInformation         *ObWriteInternationalScheduledResponse6DataExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
	ExpectedExecutionDateTime       *time.Time                                                         `json:"ExpectedExecutionDateTime,omitempty"`
	ExpectedSettlementDateTime      *time.Time                                                         `json:"ExpectedSettlementDateTime,omitempty"`
	Initiation                      ObWriteInternationalScheduledResponse6DataInitiation               `json:"Initiation"`
	InternationalScheduledPaymentID string                                                             `json:"InternationalScheduledPaymentId"`
	MultiAuthorisation              *ObWriteInternationalScheduledResponse6DataMultiAuthorisation      `json:"MultiAuthorisation,omitempty"`
	Refund                          *ObWriteInternationalScheduledResponse6DataRefund                  `json:"Refund,omitempty"`
	Status                          ObWriteInternationalScheduledResponse6DataStatusEnum               `json:"Status"`
	StatusUpdateDateTime            time.Time                                                          `json:"StatusUpdateDateTime"`
}

type ObWriteInternationalScheduledResponse6 struct {
	Data  ObWriteInternationalScheduledResponse6Data `json:"Data"`
	Links *Links                                     `json:"Links,omitempty"`
	Meta  *Meta                                      `json:"Meta,omitempty"`
}
