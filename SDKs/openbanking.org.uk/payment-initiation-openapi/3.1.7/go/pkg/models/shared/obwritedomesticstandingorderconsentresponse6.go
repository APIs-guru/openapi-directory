package shared

import (
	"time"
)

type ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnumAny    ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnumSingle ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum = "Single"
)

// ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation
// The authorisation type request from the TPP.
type ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation struct {
	AuthorisationType  ObWriteDomesticStandingOrderConsentResponse6DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                                         `json:"CompletionDateTime,omitempty"`
}

// ObWriteDomesticStandingOrderConsentResponse6DataCharges
// Set of elements used to provide details of a charge for the payment initiation.
type ObWriteDomesticStandingOrderConsentResponse6DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

// ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount
// Identification assigned by an institution to identify an account. This identification is known by the account owner.
type ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount
// The amount of the final Standing Order
type ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount
// The amount of the first Standing Order
type ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount
// The amount of the recurring Standing Order
type ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomesticStandingOrderConsentResponse6DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a domestic standing order.
type ObWriteDomesticStandingOrderConsentResponse6DataInitiation struct {
	CreditorAccount          ObWriteDomesticStandingOrderConsentResponse6DataInitiationCreditorAccount         `json:"CreditorAccount"`
	DebtorAccount            *ObWriteDomesticStandingOrderConsentResponse6DataInitiationDebtorAccount          `json:"DebtorAccount,omitempty"`
	FinalPaymentAmount       *ObWriteDomesticStandingOrderConsentResponse6DataInitiationFinalPaymentAmount     `json:"FinalPaymentAmount,omitempty"`
	FinalPaymentDateTime     *time.Time                                                                        `json:"FinalPaymentDateTime,omitempty"`
	FirstPaymentAmount       ObWriteDomesticStandingOrderConsentResponse6DataInitiationFirstPaymentAmount      `json:"FirstPaymentAmount"`
	FirstPaymentDateTime     time.Time                                                                         `json:"FirstPaymentDateTime"`
	Frequency                string                                                                            `json:"Frequency"`
	NumberOfPayments         *string                                                                           `json:"NumberOfPayments,omitempty"`
	RecurringPaymentAmount   *ObWriteDomesticStandingOrderConsentResponse6DataInitiationRecurringPaymentAmount `json:"RecurringPaymentAmount,omitempty"`
	RecurringPaymentDateTime *time.Time                                                                        `json:"RecurringPaymentDateTime,omitempty"`
	Reference                *string                                                                           `json:"Reference,omitempty"`
	SupplementaryData        map[string]interface{}                                                            `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum string

const (
	ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnumCreate ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum = "Create"
)

type ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum string

const (
	ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnumNo  ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum = "No"
	ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnumYes ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum = "Yes"
)

type ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum string

const (
	ObWriteDomesticStandingOrderConsentResponse6DataStatusEnumAuthorised            ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum = "Authorised"
	ObWriteDomesticStandingOrderConsentResponse6DataStatusEnumAwaitingAuthorisation ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum = "AwaitingAuthorisation"
	ObWriteDomesticStandingOrderConsentResponse6DataStatusEnumConsumed              ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum = "Consumed"
	ObWriteDomesticStandingOrderConsentResponse6DataStatusEnumRejected              ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum = "Rejected"
)

type ObWriteDomesticStandingOrderConsentResponse6Data struct {
	Authorisation        *ObWriteDomesticStandingOrderConsentResponse6DataAuthorisation         `json:"Authorisation,omitempty"`
	Charges              []ObWriteDomesticStandingOrderConsentResponse6DataCharges              `json:"Charges,omitempty"`
	ConsentID            string                                                                 `json:"ConsentId"`
	CreationDateTime     time.Time                                                              `json:"CreationDateTime"`
	CutOffDateTime       *time.Time                                                             `json:"CutOffDateTime,omitempty"`
	Debtor               *ObCashAccountDebtor4                                                  `json:"Debtor,omitempty"`
	Initiation           ObWriteDomesticStandingOrderConsentResponse6DataInitiation             `json:"Initiation"`
	Permission           ObWriteDomesticStandingOrderConsentResponse6DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount    *ObWriteDomesticStandingOrderConsentResponse6DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData       *ObscaSupportData1                                                     `json:"SCASupportData,omitempty"`
	Status               ObWriteDomesticStandingOrderConsentResponse6DataStatusEnum             `json:"Status"`
	StatusUpdateDateTime time.Time                                                              `json:"StatusUpdateDateTime"`
}

type ObWriteDomesticStandingOrderConsentResponse6 struct {
	Data  ObWriteDomesticStandingOrderConsentResponse6Data `json:"Data"`
	Links *Links                                           `json:"Links,omitempty"`
	Meta  *Meta                                            `json:"Meta,omitempty"`
	Risk  ObRisk1                                          `json:"Risk"`
}
