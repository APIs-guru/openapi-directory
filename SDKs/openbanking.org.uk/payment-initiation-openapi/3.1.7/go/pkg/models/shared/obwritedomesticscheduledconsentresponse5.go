package shared

import (
	"time"
)

type ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnumAny    ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnumSingle ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteDomesticScheduledConsentResponse5DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteDomesticScheduledConsentResponse5DataAuthorisation struct {
	AuthorisationType  ObWriteDomesticScheduledConsentResponse5DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                                     `json:"CompletionDateTime,omitempty"`
}

// ObWriteDomesticScheduledConsentResponse5DataCharges
// Set of elements used to provide details of a charge for the payment initiation.
type ObWriteDomesticScheduledConsentResponse5DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

// ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteDomesticScheduledConsentResponse5DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single scheduled domestic payment.
type ObWriteDomesticScheduledConsentResponse5DataInitiation struct {
	CreditorAccount            ObWriteDomesticScheduledConsentResponse5DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress      *ObPostalAddress6                                                            `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount              *ObWriteDomesticScheduledConsentResponse5DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification     *string                                                                      `json:"EndToEndIdentification,omitempty"`
	InstructedAmount           ObWriteDomesticScheduledConsentResponse5DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification  string                                                                       `json:"InstructionIdentification"`
	LocalInstrument            *string                                                                      `json:"LocalInstrument,omitempty"`
	RemittanceInformation      *ObWriteDomesticScheduledConsentResponse5DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime time.Time                                                                    `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                                       `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticScheduledConsentResponse5DataPermissionEnum string

const (
	ObWriteDomesticScheduledConsentResponse5DataPermissionEnumCreate ObWriteDomesticScheduledConsentResponse5DataPermissionEnum = "Create"
)

type ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum string

const (
	ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnumNo  ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum = "No"
	ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnumYes ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum = "Yes"
)

type ObWriteDomesticScheduledConsentResponse5DataStatusEnum string

const (
	ObWriteDomesticScheduledConsentResponse5DataStatusEnumAuthorised            ObWriteDomesticScheduledConsentResponse5DataStatusEnum = "Authorised"
	ObWriteDomesticScheduledConsentResponse5DataStatusEnumAwaitingAuthorisation ObWriteDomesticScheduledConsentResponse5DataStatusEnum = "AwaitingAuthorisation"
	ObWriteDomesticScheduledConsentResponse5DataStatusEnumConsumed              ObWriteDomesticScheduledConsentResponse5DataStatusEnum = "Consumed"
	ObWriteDomesticScheduledConsentResponse5DataStatusEnumRejected              ObWriteDomesticScheduledConsentResponse5DataStatusEnum = "Rejected"
)

type ObWriteDomesticScheduledConsentResponse5Data struct {
	Authorisation              *ObWriteDomesticScheduledConsentResponse5DataAuthorisation         `json:"Authorisation,omitempty"`
	Charges                    []ObWriteDomesticScheduledConsentResponse5DataCharges              `json:"Charges,omitempty"`
	ConsentID                  string                                                             `json:"ConsentId"`
	CreationDateTime           time.Time                                                          `json:"CreationDateTime"`
	CutOffDateTime             *time.Time                                                         `json:"CutOffDateTime,omitempty"`
	Debtor                     *ObCashAccountDebtor4                                              `json:"Debtor,omitempty"`
	ExpectedExecutionDateTime  *time.Time                                                         `json:"ExpectedExecutionDateTime,omitempty"`
	ExpectedSettlementDateTime *time.Time                                                         `json:"ExpectedSettlementDateTime,omitempty"`
	Initiation                 ObWriteDomesticScheduledConsentResponse5DataInitiation             `json:"Initiation"`
	Permission                 ObWriteDomesticScheduledConsentResponse5DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount          *ObWriteDomesticScheduledConsentResponse5DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData             *ObscaSupportData1                                                 `json:"SCASupportData,omitempty"`
	Status                     ObWriteDomesticScheduledConsentResponse5DataStatusEnum             `json:"Status"`
	StatusUpdateDateTime       time.Time                                                          `json:"StatusUpdateDateTime"`
}

type ObWriteDomesticScheduledConsentResponse5 struct {
	Data  ObWriteDomesticScheduledConsentResponse5Data `json:"Data"`
	Links *Links                                       `json:"Links,omitempty"`
	Meta  *Meta                                        `json:"Meta,omitempty"`
	Risk  ObRisk1                                      `json:"Risk"`
}
