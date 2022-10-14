package shared

import (
	"time"
)

type ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnumAny    ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnumSingle ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteDomesticStandingOrderConsent5DataAuthorisation struct {
	AuthorisationType  ObWriteDomesticStandingOrderConsent5DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                                 `json:"CompletionDateTime,omitempty"`
}

type ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticStandingOrderConsent5DataInitiation struct {
	CreditorAccount          ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount         `json:"CreditorAccount"`
	DebtorAccount            *ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount          `json:"DebtorAccount,omitempty"`
	FinalPaymentAmount       *ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount     `json:"FinalPaymentAmount,omitempty"`
	FinalPaymentDateTime     *time.Time                                                                `json:"FinalPaymentDateTime,omitempty"`
	FirstPaymentAmount       ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount      `json:"FirstPaymentAmount"`
	FirstPaymentDateTime     time.Time                                                                 `json:"FirstPaymentDateTime"`
	Frequency                string                                                                    `json:"Frequency"`
	NumberOfPayments         *string                                                                   `json:"NumberOfPayments,omitempty"`
	RecurringPaymentAmount   *ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount `json:"RecurringPaymentAmount,omitempty"`
	RecurringPaymentDateTime *time.Time                                                                `json:"RecurringPaymentDateTime,omitempty"`
	Reference                *string                                                                   `json:"Reference,omitempty"`
	SupplementaryData        map[string]interface{}                                                    `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticStandingOrderConsent5DataPermissionEnum string

const (
	ObWriteDomesticStandingOrderConsent5DataPermissionEnumCreate ObWriteDomesticStandingOrderConsent5DataPermissionEnum = "Create"
)

type ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum string

const (
	ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnumNo  ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum = "No"
	ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnumYes ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum = "Yes"
)

type ObWriteDomesticStandingOrderConsent5Data struct {
	Authorisation     *ObWriteDomesticStandingOrderConsent5DataAuthorisation         `json:"Authorisation,omitempty"`
	Initiation        ObWriteDomesticStandingOrderConsent5DataInitiation             `json:"Initiation"`
	Permission        ObWriteDomesticStandingOrderConsent5DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount *ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData    *ObscaSupportData1                                             `json:"SCASupportData,omitempty"`
}

type ObWriteDomesticStandingOrderConsent5 struct {
	Data ObWriteDomesticStandingOrderConsent5Data `json:"Data"`
	Risk ObRisk1                                  `json:"Risk"`
}
