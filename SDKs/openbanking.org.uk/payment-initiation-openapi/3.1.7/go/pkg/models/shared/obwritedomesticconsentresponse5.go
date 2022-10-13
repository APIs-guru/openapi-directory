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
	CompletionDateTime *time.Time                                                            `json:"CompletionDateTime"`
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
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticConsentResponse5DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticConsentResponse5DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteDomesticConsentResponse5DataInitiation struct {
	CreditorAccount           ObWriteDomesticConsentResponse5DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress     *ObPostalAddress6                                                   `json:"CreditorPostalAddress"`
	DebtorAccount             *ObWriteDomesticConsentResponse5DataInitiationDebtorAccount         `json:"DebtorAccount"`
	EndToEndIdentification    string                                                              `json:"EndToEndIdentification"`
	InstructedAmount          ObWriteDomesticConsentResponse5DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification string                                                              `json:"InstructionIdentification"`
	LocalInstrument           *string                                                             `json:"LocalInstrument"`
	RemittanceInformation     *ObWriteDomesticConsentResponse5DataInitiationRemittanceInformation `json:"RemittanceInformation"`
	SupplementaryData         map[string]interface{}                                              `json:"SupplementaryData"`
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
	Authorisation              *ObWriteDomesticConsentResponse5DataAuthorisation         `json:"Authorisation"`
	Charges                    []ObWriteDomesticConsentResponse5DataCharges              `json:"Charges"`
	ConsentID                  string                                                    `json:"ConsentId"`
	CreationDateTime           time.Time                                                 `json:"CreationDateTime"`
	CutOffDateTime             *time.Time                                                `json:"CutOffDateTime"`
	Debtor                     *ObCashAccountDebtor4                                     `json:"Debtor"`
	ExpectedExecutionDateTime  *time.Time                                                `json:"ExpectedExecutionDateTime"`
	ExpectedSettlementDateTime *time.Time                                                `json:"ExpectedSettlementDateTime"`
	Initiation                 ObWriteDomesticConsentResponse5DataInitiation             `json:"Initiation"`
	ReadRefundAccount          *ObWriteDomesticConsentResponse5DataReadRefundAccountEnum `json:"ReadRefundAccount"`
	ScaSupportData             *ObscaSupportData1                                        `json:"SCASupportData"`
	Status                     ObWriteDomesticConsentResponse5DataStatusEnum             `json:"Status"`
	StatusUpdateDateTime       time.Time                                                 `json:"StatusUpdateDateTime"`
}

type ObWriteDomesticConsentResponse5 struct {
	Data  ObWriteDomesticConsentResponse5Data `json:"Data"`
	Links *Links                              `json:"Links"`
	Meta  *Meta                               `json:"Meta"`
	Risk  ObRisk1                             `json:"Risk"`
}
