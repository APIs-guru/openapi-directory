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
	CompletionDateTime *time.Time                                                                      `json:"CompletionDateTime"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiationCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternationalStandingOrderConsent6DataInitiation struct {
	ChargeBearer           *ObChargeBearerType1CodeEnum                                            `json:"ChargeBearer"`
	Creditor               *ObWriteInternationalStandingOrderConsent6DataInitiationCreditor        `json:"Creditor"`
	CreditorAccount        ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAccount  `json:"CreditorAccount"`
	CreditorAgent          *ObWriteInternationalStandingOrderConsent6DataInitiationCreditorAgent   `json:"CreditorAgent"`
	CurrencyOfTransfer     string                                                                  `json:"CurrencyOfTransfer"`
	DebtorAccount          *ObWriteInternationalStandingOrderConsent6DataInitiationDebtorAccount   `json:"DebtorAccount"`
	DestinationCountryCode *string                                                                 `json:"DestinationCountryCode"`
	ExtendedPurpose        *string                                                                 `json:"ExtendedPurpose"`
	FinalPaymentDateTime   *time.Time                                                              `json:"FinalPaymentDateTime"`
	FirstPaymentDateTime   time.Time                                                               `json:"FirstPaymentDateTime"`
	Frequency              string                                                                  `json:"Frequency"`
	InstructedAmount       ObWriteInternationalStandingOrderConsent6DataInitiationInstructedAmount `json:"InstructedAmount"`
	NumberOfPayments       *string                                                                 `json:"NumberOfPayments"`
	Purpose                *string                                                                 `json:"Purpose"`
	Reference              *string                                                                 `json:"Reference"`
	SupplementaryData      map[string]interface{}                                                  `json:"SupplementaryData"`
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
	Authorisation     *ObWriteInternationalStandingOrderConsent6DataAuthorisation         `json:"Authorisation"`
	Initiation        ObWriteInternationalStandingOrderConsent6DataInitiation             `json:"Initiation"`
	Permission        ObWriteInternationalStandingOrderConsent6DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount *ObWriteInternationalStandingOrderConsent6DataReadRefundAccountEnum `json:"ReadRefundAccount"`
	ScaSupportData    *ObscaSupportData1                                                  `json:"SCASupportData"`
}

type ObWriteInternationalStandingOrderConsent6 struct {
	Data ObWriteInternationalStandingOrderConsent6Data `json:"Data"`
	Risk ObRisk1                                       `json:"Risk"`
}
