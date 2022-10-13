package shared

import (
	"time"
)

type ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnumAny    ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation struct {
	AuthorisationType  ObWriteInternationalStandingOrderConsentResponse7DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                                              `json:"CompletionDateTime"`
}

type ObWriteInternationalStandingOrderConsentResponse7DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalStandingOrderConsentResponse7DataInitiation struct {
	ChargeBearer           *ObChargeBearerType1CodeEnum                                                    `json:"ChargeBearer"`
	Creditor               *ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditor        `json:"Creditor"`
	CreditorAccount        ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAccount  `json:"CreditorAccount"`
	CreditorAgent          *ObWriteInternationalStandingOrderConsentResponse7DataInitiationCreditorAgent   `json:"CreditorAgent"`
	CurrencyOfTransfer     string                                                                          `json:"CurrencyOfTransfer"`
	DebtorAccount          *ObWriteInternationalStandingOrderConsentResponse7DataInitiationDebtorAccount   `json:"DebtorAccount"`
	DestinationCountryCode *string                                                                         `json:"DestinationCountryCode"`
	ExtendedPurpose        *string                                                                         `json:"ExtendedPurpose"`
	FinalPaymentDateTime   *time.Time                                                                      `json:"FinalPaymentDateTime"`
	FirstPaymentDateTime   time.Time                                                                       `json:"FirstPaymentDateTime"`
	Frequency              string                                                                          `json:"Frequency"`
	InstructedAmount       ObWriteInternationalStandingOrderConsentResponse7DataInitiationInstructedAmount `json:"InstructedAmount"`
	NumberOfPayments       *string                                                                         `json:"NumberOfPayments"`
	Purpose                *string                                                                         `json:"Purpose"`
	Reference              *string                                                                         `json:"Reference"`
	SupplementaryData      map[string]interface{}                                                          `json:"SupplementaryData"`
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
	Authorisation        *ObWriteInternationalStandingOrderConsentResponse7DataAuthorisation         `json:"Authorisation"`
	Charges              []ObWriteInternationalStandingOrderConsentResponse7DataCharges              `json:"Charges"`
	ConsentID            string                                                                      `json:"ConsentId"`
	CreationDateTime     time.Time                                                                   `json:"CreationDateTime"`
	CutOffDateTime       *time.Time                                                                  `json:"CutOffDateTime"`
	Debtor               *ObCashAccountDebtor4                                                       `json:"Debtor"`
	Initiation           ObWriteInternationalStandingOrderConsentResponse7DataInitiation             `json:"Initiation"`
	Permission           ObWriteInternationalStandingOrderConsentResponse7DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount    *ObWriteInternationalStandingOrderConsentResponse7DataReadRefundAccountEnum `json:"ReadRefundAccount"`
	ScaSupportData       *ObscaSupportData1                                                          `json:"SCASupportData"`
	Status               ObWriteInternationalStandingOrderConsentResponse7DataStatusEnum             `json:"Status"`
	StatusUpdateDateTime time.Time                                                                   `json:"StatusUpdateDateTime"`
}

type ObWriteInternationalStandingOrderConsentResponse7 struct {
	Data  ObWriteInternationalStandingOrderConsentResponse7Data `json:"Data"`
	Links *Links                                                `json:"Links"`
	Meta  *Meta                                                 `json:"Meta"`
	Risk  ObRisk1                                               `json:"Risk"`
}
