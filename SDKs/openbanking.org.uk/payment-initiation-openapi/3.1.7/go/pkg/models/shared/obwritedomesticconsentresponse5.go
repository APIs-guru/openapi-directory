package shared

import (
	"time"
)

type ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnumAny    ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnumSingle ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteDomesticConsentResponse5DataAuthorisation struct {
	AuthorisationType  ObWriteDomesticConsentResponse5DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                            `json:"CompletionDateTime,omitempty"`
}

type ObWriteDomesticConsentResponse5DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteDomesticConsentResponse5DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticConsentResponse5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticConsentResponse5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

type ObWriteDomesticConsentResponse5DataInitiation struct {
	CreditorAccount           ObWriteDomesticConsentResponse5DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress     *ObPostalAddress6                                                   `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount             *ObWriteDomesticConsentResponse5DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification    string                                                              `json:"EndToEndIdentification"`
	InstructedAmount          ObWriteDomesticConsentResponse5DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification string                                                              `json:"InstructionIdentification"`
	LocalInstrument           *string                                                             `json:"LocalInstrument,omitempty"`
	RemittanceInformation     *ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	SupplementaryData         map[string]interface{}                                              `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticConsentResponse5DataReadRefundAccountEnum string

const (
	ObWriteDomesticConsentResponse5DataReadRefundAccountEnumNo  ObWriteDomesticConsentResponse5DataReadRefundAccountEnum = "No"
	ObWriteDomesticConsentResponse5DataReadRefundAccountEnumYes ObWriteDomesticConsentResponse5DataReadRefundAccountEnum = "Yes"
)

type ObWriteDomesticConsentResponse5DataStatusEnum string

const (
	ObWriteDomesticConsentResponse5DataStatusEnumAuthorised            ObWriteDomesticConsentResponse5DataStatusEnum = "Authorised"
	ObWriteDomesticConsentResponse5DataStatusEnumAwaitingAuthorisation ObWriteDomesticConsentResponse5DataStatusEnum = "AwaitingAuthorisation"
	ObWriteDomesticConsentResponse5DataStatusEnumConsumed              ObWriteDomesticConsentResponse5DataStatusEnum = "Consumed"
	ObWriteDomesticConsentResponse5DataStatusEnumRejected              ObWriteDomesticConsentResponse5DataStatusEnum = "Rejected"
)

type ObWriteDomesticConsentResponse5Data struct {
	Authorisation              *ObWriteDomesticConsentResponse5DataAuthorisation         `json:"Authorisation,omitempty"`
	Charges                    []ObWriteDomesticConsentResponse5DataCharges              `json:"Charges,omitempty"`
	ConsentID                  string                                                    `json:"ConsentId"`
	CreationDateTime           time.Time                                                 `json:"CreationDateTime"`
	CutOffDateTime             *time.Time                                                `json:"CutOffDateTime,omitempty"`
	Debtor                     *ObCashAccountDebtor4                                     `json:"Debtor,omitempty"`
	ExpectedExecutionDateTime  *time.Time                                                `json:"ExpectedExecutionDateTime,omitempty"`
	ExpectedSettlementDateTime *time.Time                                                `json:"ExpectedSettlementDateTime,omitempty"`
	Initiation                 ObWriteDomesticConsentResponse5DataInitiation             `json:"Initiation"`
	ReadRefundAccount          *ObWriteDomesticConsentResponse5DataReadRefundAccountEnum `json:"ReadRefundAccount,omitempty"`
	ScaSupportData             *ObscaSupportData1                                        `json:"SCASupportData,omitempty"`
	Status                     ObWriteDomesticConsentResponse5DataStatusEnum             `json:"Status"`
	StatusUpdateDateTime       time.Time                                                 `json:"StatusUpdateDateTime"`
}

type ObWriteDomesticConsentResponse5 struct {
	Data  ObWriteDomesticConsentResponse5Data `json:"Data"`
	Links *Links                              `json:"Links,omitempty"`
	Meta  *Meta                               `json:"Meta,omitempty"`
	Risk  ObRisk1                             `json:"Risk"`
}
