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
	CompletionDateTime *time.Time                                                                 `json:"CompletionDateTime"`
}

type ObWriteDomesticStandingOrderConsent5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
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
	DebtorAccount            *ObWriteDomesticStandingOrderConsent5DataInitiationDebtorAccount          `json:"DebtorAccount"`
	FinalPaymentAmount       *ObWriteDomesticStandingOrderConsent5DataInitiationFinalPaymentAmount     `json:"FinalPaymentAmount"`
	FinalPaymentDateTime     *time.Time                                                                `json:"FinalPaymentDateTime"`
	FirstPaymentAmount       ObWriteDomesticStandingOrderConsent5DataInitiationFirstPaymentAmount      `json:"FirstPaymentAmount"`
	FirstPaymentDateTime     time.Time                                                                 `json:"FirstPaymentDateTime"`
	Frequency                string                                                                    `json:"Frequency"`
	NumberOfPayments         *string                                                                   `json:"NumberOfPayments"`
	RecurringPaymentAmount   *ObWriteDomesticStandingOrderConsent5DataInitiationRecurringPaymentAmount `json:"RecurringPaymentAmount"`
	RecurringPaymentDateTime *time.Time                                                                `json:"RecurringPaymentDateTime"`
	Reference                *string                                                                   `json:"Reference"`
	SupplementaryData        map[string]interface{}                                                    `json:"SupplementaryData"`
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
	Authorisation     *ObWriteDomesticStandingOrderConsent5DataAuthorisation         `json:"Authorisation"`
	Initiation        ObWriteDomesticStandingOrderConsent5DataInitiation             `json:"Initiation"`
	Permission        ObWriteDomesticStandingOrderConsent5DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount *ObWriteDomesticStandingOrderConsent5DataReadRefundAccountEnum `json:"ReadRefundAccount"`
	ScaSupportData    *ObscaSupportData1                                             `json:"SCASupportData"`
}

type ObWriteDomesticStandingOrderConsent5 struct {
	Data ObWriteDomesticStandingOrderConsent5Data `json:"Data"`
	Risk ObRisk1                                  `json:"Risk"`
}
