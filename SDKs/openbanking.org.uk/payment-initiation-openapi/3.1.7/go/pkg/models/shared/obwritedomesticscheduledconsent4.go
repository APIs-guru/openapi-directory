package shared

import (
	"time"
)

type ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnumAny    ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnumSingle ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteDomesticScheduledConsent4DataAuthorisation struct {
	AuthorisationType  ObWriteDomesticScheduledConsent4DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                             `json:"CompletionDateTime"`
}

type ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteDomesticScheduledConsent4DataInitiation struct {
	CreditorAccount            ObWriteDomesticScheduledConsent4DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress      *ObPostalAddress6                                                    `json:"CreditorPostalAddress"`
	DebtorAccount              *ObWriteDomesticScheduledConsent4DataInitiationDebtorAccount         `json:"DebtorAccount"`
	EndToEndIdentification     *string                                                              `json:"EndToEndIdentification"`
	InstructedAmount           ObWriteDomesticScheduledConsent4DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification  string                                                               `json:"InstructionIdentification"`
	LocalInstrument            *string                                                              `json:"LocalInstrument"`
	RemittanceInformation      *ObWriteDomesticScheduledConsent4DataInitiationRemittanceInformation `json:"RemittanceInformation"`
	RequestedExecutionDateTime time.Time                                                            `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                               `json:"SupplementaryData"`
}

type ObWriteDomesticScheduledConsent4DataPermissionEnum string

const (
	ObWriteDomesticScheduledConsent4DataPermissionEnumCreate ObWriteDomesticScheduledConsent4DataPermissionEnum = "Create"
)

type ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum string

const (
	ObWriteDomesticScheduledConsent4DataReadRefundAccountEnumNo  ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum = "No"
	ObWriteDomesticScheduledConsent4DataReadRefundAccountEnumYes ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum = "Yes"
)

type ObWriteDomesticScheduledConsent4Data struct {
	Authorisation     *ObWriteDomesticScheduledConsent4DataAuthorisation         `json:"Authorisation"`
	Initiation        ObWriteDomesticScheduledConsent4DataInitiation             `json:"Initiation"`
	Permission        ObWriteDomesticScheduledConsent4DataPermissionEnum         `json:"Permission"`
	ReadRefundAccount *ObWriteDomesticScheduledConsent4DataReadRefundAccountEnum `json:"ReadRefundAccount"`
	ScaSupportData    *ObscaSupportData1                                         `json:"SCASupportData"`
}

type ObWriteDomesticScheduledConsent4 struct {
	Data ObWriteDomesticScheduledConsent4Data `json:"Data"`
	Risk ObRisk1                              `json:"Risk"`
}
