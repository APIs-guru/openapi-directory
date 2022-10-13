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
	CompletionDateTime *time.Time                                                    `json:"CompletionDateTime"`
}

type ObWriteDomesticConsent4DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticConsent4DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticConsent4DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticConsent4DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteDomesticConsent4DataInitiation struct {
	CreditorAccount           ObWriteDomesticConsent4DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress     *ObPostalAddress6                                           `json:"CreditorPostalAddress"`
	DebtorAccount             *ObWriteDomesticConsent4DataInitiationDebtorAccount         `json:"DebtorAccount"`
	EndToEndIdentification    string                                                      `json:"EndToEndIdentification"`
	InstructedAmount          ObWriteDomesticConsent4DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification string                                                      `json:"InstructionIdentification"`
	LocalInstrument           *string                                                     `json:"LocalInstrument"`
	RemittanceInformation     *ObWriteDomesticConsent4DataInitiationRemittanceInformation `json:"RemittanceInformation"`
	SupplementaryData         map[string]interface{}                                      `json:"SupplementaryData"`
}

type ObWriteDomesticConsent4DataReadRefundAccountEnum string

const (
	ObWriteDomesticConsent4DataReadRefundAccountEnumNo  ObWriteDomesticConsent4DataReadRefundAccountEnum = "No"
	ObWriteDomesticConsent4DataReadRefundAccountEnumYes ObWriteDomesticConsent4DataReadRefundAccountEnum = "Yes"
)

type ObWriteDomesticConsent4Data struct {
	Authorisation     *ObWriteDomesticConsent4DataAuthorisation         `json:"Authorisation"`
	Initiation        ObWriteDomesticConsent4DataInitiation             `json:"Initiation"`
	ReadRefundAccount *ObWriteDomesticConsent4DataReadRefundAccountEnum `json:"ReadRefundAccount"`
	ScaSupportData    *ObscaSupportData1                                `json:"SCASupportData"`
}

type ObWriteDomesticConsent4 struct {
	Data ObWriteDomesticConsent4Data `json:"Data"`
	Risk ObRisk1                     `json:"Risk"`
}
