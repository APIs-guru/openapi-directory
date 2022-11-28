package shared

import (
	"time"
)

// ObWriteInternationalResponse5DataCharges
// Set of elements used to provide details of a charge for the payment initiation.
type ObWriteInternationalResponse5DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnumActual     ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum = "Indicative"
)

// ObWriteInternationalResponse5DataExchangeRateInformation
// Further detailed information on the exchange rate that has been used in the payment transaction.
type ObWriteInternationalResponse5DataExchangeRateInformation struct {
	ContractIdentification *string                                                              `json:"ContractIdentification,omitempty"`
	ExchangeRate           float64                                                              `json:"ExchangeRate"`
	ExpirationDateTime     *time.Time                                                           `json:"ExpirationDateTime,omitempty"`
	RateType               ObWriteInternationalResponse5DataExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                               `json:"UnitCurrency"`
}

// ObWriteInternationalResponse5DataInitiationCreditor
// Party to which an amount of money is due.
type ObWriteInternationalResponse5DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

// ObWriteInternationalResponse5DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteInternationalResponse5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalResponse5DataInitiationCreditorAgent
// Financial institution servicing an account for the creditor.
type ObWriteInternationalResponse5DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalResponse5DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteInternationalResponse5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

// ObWriteInternationalResponse5DataInitiationExchangeRateInformation
// Provides details on the currency exchange rate and contract.
type ObWriteInternationalResponse5DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                        `json:"ContractIdentification,omitempty"`
	ExchangeRate           *float64                                                                       `json:"ExchangeRate,omitempty"`
	RateType               ObWriteInternationalResponse5DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                         `json:"UnitCurrency"`
}

// ObWriteInternationalResponse5DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteInternationalResponse5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternationalResponse5DataInitiationInstructionPriorityEnumNormal ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternationalResponse5DataInitiationInstructionPriorityEnumUrgent ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum = "Urgent"
)

// ObWriteInternationalResponse5DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteInternationalResponse5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteInternationalResponse5DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
type ObWriteInternationalResponse5DataInitiation struct {
	ChargeBearer              *ObChargeBearerType1CodeEnum                                        `json:"ChargeBearer,omitempty"`
	Creditor                  *ObWriteInternationalResponse5DataInitiationCreditor                `json:"Creditor,omitempty"`
	CreditorAccount           ObWriteInternationalResponse5DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent             *ObWriteInternationalResponse5DataInitiationCreditorAgent           `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer        string                                                              `json:"CurrencyOfTransfer"`
	DebtorAccount             *ObWriteInternationalResponse5DataInitiationDebtorAccount           `json:"DebtorAccount,omitempty"`
	DestinationCountryCode    *string                                                             `json:"DestinationCountryCode,omitempty"`
	EndToEndIdentification    string                                                              `json:"EndToEndIdentification"`
	ExchangeRateInformation   *ObWriteInternationalResponse5DataInitiationExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
	ExtendedPurpose           *string                                                             `json:"ExtendedPurpose,omitempty"`
	InstructedAmount          ObWriteInternationalResponse5DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification string                                                              `json:"InstructionIdentification"`
	InstructionPriority       *ObWriteInternationalResponse5DataInitiationInstructionPriorityEnum `json:"InstructionPriority,omitempty"`
	LocalInstrument           *string                                                             `json:"LocalInstrument,omitempty"`
	Purpose                   *string                                                             `json:"Purpose,omitempty"`
	RemittanceInformation     *ObWriteInternationalResponse5DataInitiationRemittanceInformation   `json:"RemittanceInformation,omitempty"`
	SupplementaryData         map[string]interface{}                                              `json:"SupplementaryData,omitempty"`
}

type ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum string

const (
	ObWriteInternationalResponse5DataMultiAuthorisationStatusEnumAuthorised                   ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum = "Authorised"
	ObWriteInternationalResponse5DataMultiAuthorisationStatusEnumAwaitingFurtherAuthorisation ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum = "AwaitingFurtherAuthorisation"
	ObWriteInternationalResponse5DataMultiAuthorisationStatusEnumRejected                     ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum = "Rejected"
)

// ObWriteInternationalResponse5DataMultiAuthorisation
// The multiple authorisation flow response from the ASPSP.
type ObWriteInternationalResponse5DataMultiAuthorisation struct {
	ExpirationDateTime *time.Time                                                    `json:"ExpirationDateTime,omitempty"`
	LastUpdateDateTime *time.Time                                                    `json:"LastUpdateDateTime,omitempty"`
	NumberReceived     *int64                                                        `json:"NumberReceived,omitempty"`
	NumberRequired     *int64                                                        `json:"NumberRequired,omitempty"`
	Status             ObWriteInternationalResponse5DataMultiAuthorisationStatusEnum `json:"Status"`
}

// ObWriteInternationalResponse5DataRefundAccount
// Provides the details to identify an account.
type ObWriteInternationalResponse5DataRefundAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternationalResponse5DataRefundAgent
// Set of elements used to uniquely and unambiguously identify a financial institution or a branch of a financial institution.
type ObWriteInternationalResponse5DataRefundAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternationalResponse5DataRefundCreditor
// Set of elements used to identify a person or an organisation.
type ObWriteInternationalResponse5DataRefundCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

type ObWriteInternationalResponse5DataRefund struct {
	Account  ObWriteInternationalResponse5DataRefundAccount   `json:"Account"`
	Agent    *ObWriteInternationalResponse5DataRefundAgent    `json:"Agent,omitempty"`
	Creditor *ObWriteInternationalResponse5DataRefundCreditor `json:"Creditor,omitempty"`
}

type ObWriteInternationalResponse5DataStatusEnum string

const (
	ObWriteInternationalResponse5DataStatusEnumAcceptedCreditSettlementCompleted ObWriteInternationalResponse5DataStatusEnum = "AcceptedCreditSettlementCompleted"
	ObWriteInternationalResponse5DataStatusEnumAcceptedSettlementCompleted       ObWriteInternationalResponse5DataStatusEnum = "AcceptedSettlementCompleted"
	ObWriteInternationalResponse5DataStatusEnumAcceptedSettlementInProcess       ObWriteInternationalResponse5DataStatusEnum = "AcceptedSettlementInProcess"
	ObWriteInternationalResponse5DataStatusEnumAcceptedWithoutPosting            ObWriteInternationalResponse5DataStatusEnum = "AcceptedWithoutPosting"
	ObWriteInternationalResponse5DataStatusEnumPending                           ObWriteInternationalResponse5DataStatusEnum = "Pending"
	ObWriteInternationalResponse5DataStatusEnumRejected                          ObWriteInternationalResponse5DataStatusEnum = "Rejected"
)

type ObWriteInternationalResponse5Data struct {
	Charges                    []ObWriteInternationalResponse5DataCharges                `json:"Charges,omitempty"`
	ConsentID                  string                                                    `json:"ConsentId"`
	CreationDateTime           time.Time                                                 `json:"CreationDateTime"`
	Debtor                     *ObCashAccountDebtor4                                     `json:"Debtor,omitempty"`
	ExchangeRateInformation    *ObWriteInternationalResponse5DataExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
	ExpectedExecutionDateTime  *time.Time                                                `json:"ExpectedExecutionDateTime,omitempty"`
	ExpectedSettlementDateTime *time.Time                                                `json:"ExpectedSettlementDateTime,omitempty"`
	Initiation                 ObWriteInternationalResponse5DataInitiation               `json:"Initiation"`
	InternationalPaymentID     string                                                    `json:"InternationalPaymentId"`
	MultiAuthorisation         *ObWriteInternationalResponse5DataMultiAuthorisation      `json:"MultiAuthorisation,omitempty"`
	Refund                     *ObWriteInternationalResponse5DataRefund                  `json:"Refund,omitempty"`
	Status                     ObWriteInternationalResponse5DataStatusEnum               `json:"Status"`
	StatusUpdateDateTime       time.Time                                                 `json:"StatusUpdateDateTime"`
}

type ObWriteInternationalResponse5 struct {
	Data  ObWriteInternationalResponse5Data `json:"Data"`
	Links *Links                            `json:"Links,omitempty"`
	Meta  *Meta                             `json:"Meta,omitempty"`
}
