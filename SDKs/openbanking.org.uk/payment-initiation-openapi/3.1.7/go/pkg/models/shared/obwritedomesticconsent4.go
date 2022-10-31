package shared

import (
	"time"
)

type ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnumAny    ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnumSingle ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteDomesticConsent4DataAuthorisation struct {
	AuthorisationType  ObWriteDomesticConsent4DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                    `json:"CompletionDateTime,omitempty"`
}

type ObWriteDomesticConsent4DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticConsent4DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticConsent4DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticConsent4DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

type ObWriteDomesticConsent4DataInitiation struct {
	CreditorAccount           ObWriteDomesticConsent4DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress     *ObPostalAddress6                                           `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount             *ObWriteDomesticConsent4DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification    string                                                      `json:"EndToEndIdentification"`
	InstructedAmount          ObWriteDomesticConsent4DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification string                                                      `json:"InstructionIdentification"`
	LocalInstrument           *string                                                     `json:"LocalInstrument,omitempty"`
	RemittanceInformation     *ObWriteDomesticConsent4DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	SupplementaryData         map[string]interface{}                                      `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticConsent4DataReadRefundAccountEnum string

const (
	ObWriteDomesticConsent4DataReadRefundAccountEnumNo  ObWriteDomesticConsent4DataReadRefundAccountEnum = "No"
	ObWriteDomesticConsent4DataReadRefundAccountEnumYes ObWriteDomesticConsent4DataReadRefundAccountEnum = "Yes"
)

type ObWriteDomesticConsent4Data struct {
	Authorisation     *ObWriteDomesticConsent4DataAuthorisation         `json:"Authorisation,omitempty"`
	Initiation        ObWriteDomesticConsent4DataInitiation             `json:"Initiation"`
	ReadRefundAccount *ObWriteDomesticConsent4DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData    *ObscaSupportData1                                `json:"SCASupportData,omitempty"`
}

type ObWriteDomesticConsent4 struct {
	Data ObWriteDomesticConsent4Data `json:"Data"`
	Risk ObRisk1                     `json:"Risk"`
}
