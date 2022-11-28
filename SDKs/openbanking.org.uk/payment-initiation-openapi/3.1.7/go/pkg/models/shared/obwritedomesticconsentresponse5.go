package shared

import (
	"time"
)

type ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnumAny    ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnumSingle ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteDomesticConsentResponse5DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteDomesticConsentResponse5DataAuthorisation struct {
	AuthorisationType  ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                            `json:"CompletionDateTime,omitempty"`
}

// ObWriteDomesticConsentResponse5DataCharges
// Set of elements used to provide details of a charge for the payment initiation.
type ObWriteDomesticConsentResponse5DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

// ObWriteDomesticConsentResponse5DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteDomesticConsentResponse5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticConsentResponse5DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteDomesticConsentResponse5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticConsentResponse5DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteDomesticConsentResponse5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteDomesticConsentResponse5DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
type ObWriteDomesticConsentResponse5DataInitiation struct {
	CreditorAccount           ObWriteDomesticConsentResponse5DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress     *ObPostalAddress6                                                   `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount             *ObWriteDomesticConsentResponse5DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification    string                                                              `json:"EndToEndIdentification"`
	InstructedAmount          ObWriteDomesticConsentResponse5DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification string                                                              `json:"InstructionIdentification"`
	LocalInstrument           *string                                                             `json:"LocalInstrument,omitempty"`
	RemittanceInformation     *ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	SupplementaryData         map[string]interface{}                                              `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticConsentResponse5DataReadRefundAccountEnum string

const (
	ObWriteDomesticConsentResponse5DataReadRefundAccountEnumNo  ObWriteDomesticConsentResponse5DataReadRefundAccountEnum = "No"
	ObWriteDomesticConsentResponse5DataReadRefundAccountEnumYes ObWriteDomesticConsentResponse5DataReadRefundAccountEnum = "Yes"
)

type ObWriteDomesticConsentResponse5DataStatusEnum string

const (
	ObWriteDomesticConsentResponse5DataStatusEnumAuthorised            ObWriteDomesticConsentResponse5DataStatusEnum = "Authorised"
	ObWriteDomesticConsentResponse5DataStatusEnumAwaitingAuthorisation ObWriteDomesticConsentResponse5DataStatusEnum = "AwaitingAuthorisation"
	ObWriteDomesticConsentResponse5DataStatusEnumConsumed              ObWriteDomesticConsentResponse5DataStatusEnum = "Consumed"
	ObWriteDomesticConsentResponse5DataStatusEnumRejected              ObWriteDomesticConsentResponse5DataStatusEnum = "Rejected"
)

type ObWriteDomesticConsentResponse5Data struct {
	Authorisation              *ObWriteDomesticConsentResponse5DataAuthorisation         `json:"Authorisation,omitempty"`
	Charges                    []ObWriteDomesticConsentResponse5DataCharges              `json:"Charges,omitempty"`
	ConsentID                  string                                                    `json:"ConsentId"`
	CreationDateTime           time.Time                                                 `json:"CreationDateTime"`
	CutOffDateTime             *time.Time                                                `json:"CutOffDateTime,omitempty"`
	Debtor                     *ObCashAccountDebtor4                                     `json:"Debtor,omitempty"`
	ExpectedExecutionDateTime  *time.Time                                                `json:"ExpectedExecutionDateTime,omitempty"`
	ExpectedSettlementDateTime *time.Time                                                `json:"ExpectedSettlementDateTime,omitempty"`
	Initiation                 ObWriteDomesticConsentResponse5DataInitiation             `json:"Initiation"`
	ReadRefundAccount          *ObWriteDomesticConsentResponse5DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData             *ObscaSupportData1                                        `json:"SCASupportData,omitempty"`
	Status                     ObWriteDomesticConsentResponse5DataStatusEnum             `json:"Status"`
	StatusUpdateDateTime       time.Time                                                 `json:"StatusUpdateDateTime"`
}

type ObWriteDomesticConsentResponse5 struct {
	Data  ObWriteDomesticConsentResponse5Data `json:"Data"`
	Links *Links                              `json:"Links,omitempty"`
	Meta  *Meta                               `json:"Meta,omitempty"`
	Risk  ObRisk1                             `json:"Risk"`
}
