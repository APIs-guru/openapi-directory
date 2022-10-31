package shared

import (
	"time"
)

type ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnumAny    ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnumSingle ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteInternationalStandingOrderConsent6DataAuthorisation struct {
	AuthorisationType  ObWriteInternationalStandingOrderConsent6DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                                      `json:"CompletionDateTime,omitempty"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiation struct {
	ChargeBearer           *ObChargeBearerType1CodeEnum                                            `json:"ChargeBearer,omitempty"`
	Creditor               *ObWriteInternationalStandingOrderConsent6DataInitiationCreditor        `json:"Creditor,omitempty"`
	CreditorAccount        ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount  `json:"CreditorAccount"`
	CreditorAgent          *ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent   `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer     string                                                                  `json:"CurrencyOfTransfer"`
	DebtorAccount          *ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount   `json:"DebtorAccount,omitempty"`
	DestinationCountryCode *string                                                                 `json:"DestinationCountryCode,omitempty"`
	ExtendedPurpose        *string                                                                 `json:"ExtendedPurpose,omitempty"`
	FinalPaymentDateTime   *time.Time                                                              `json:"FinalPaymentDateTime,omitempty"`
	FirstPaymentDateTime   time.Time                                                               `json:"FirstPaymentDateTime"`
	Frequency              string                                                                  `json:"Frequency"`
	InstructedAmount       ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount `json:"InstructedAmount"`
	NumberOfPayments       *string                                                                 `json:"NumberOfPayments,omitempty"`
	Purpose                *string                                                                 `json:"Purpose,omitempty"`
	Reference              *string                                                                 `json:"Reference,omitempty"`
	SupplementaryData      map[string]interface{}                                                  `json:"SupplementaryData,omitempty"`
}

type ObWriteInternationalStandingOrderConsent6DataPermissionEnum string

const (
	ObWriteInternationalStandingOrderConsent6DataPermissionEnumCreate ObWriteInternationalStandingOrderConsent6DataPermissionEnum = "Create"
)

type ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum string

const (
	ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnumNo  ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum = "No"
	ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnumYes ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum = "Yes"
)

type ObWriteInternationalStandingOrderConsent6Data struct {
	Authorisation     *ObWriteInternationalStandingOrderConsent6DataAuthorisation         `json:"Authorisation,omitempty"`
	Initiation        ObWriteInternationalStandingOrderConsent6DataInitiation             `json:"Initiation"`
	Permission        ObWriteInternationalStandingOrderConsent6DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount *ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData    *ObscaSupportData1                                                  `json:"SCASupportData,omitempty"`
}

type ObWriteInternationalStandingOrderConsent6 struct {
	Data ObWriteInternationalStandingOrderConsent6Data `json:"Data"`
	Risk ObRisk1                                       `json:"Risk"`
}
