package shared

import (
	"time"
)

type ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum string

const (
	ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnumAny    ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum = "Any"
	ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnumSingle ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum = "Single"
)

type ObWriteFileConsentResponse4DataAuthorisation struct {
	AuthorisationType  ObWriteFileConsentResponse4DataAuthorisationAuthorisationTypeEnum `json:"AuthorisationType"`
	CompletionDateTime *time.Time                                                        `json:"CompletionDateTime"`
}

type ObWriteFileConsentResponse4DataCharges struct {
	Amount       ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	ChargeBearer ObChargeBearerType1CodeEnum         `json:"ChargeBearer"`
	Type         string                              `json:"Type"`
}

type ObWriteFileConsentResponse4DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteFileConsentResponse4DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteFileConsentResponse4DataInitiation struct {
	ControlSum                 *float64                                                        `json:"ControlSum"`
	DebtorAccount              *ObWriteFileConsentResponse4DataInitiationDebtorAccount         `json:"DebtorAccount"`
	FileHash                   string                                                          `json:"FileHash"`
	FileReference              *string                                                         `json:"FileReference"`
	FileType                   string                                                          `json:"FileType"`
	LocalInstrument            *string                                                         `json:"LocalInstrument"`
	NumberOfTransactions       *string                                                         `json:"NumberOfTransactions"`
	RemittanceInformation      *ObWriteFileConsentResponse4DataInitiationRemittanceInformation `json:"RemittanceInformation"`
	RequestedExecutionDateTime *time.Time                                                      `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                          `json:"SupplementaryData"`
}

type ObWriteFileConsentResponse4DataStatusEnum string

const (
	ObWriteFileConsentResponse4DataStatusEnumAuthorised            ObWriteFileConsentResponse4DataStatusEnum = "Authorised"
	ObWriteFileConsentResponse4DataStatusEnumAwaitingAuthorisation ObWriteFileConsentResponse4DataStatusEnum = "AwaitingAuthorisation"
	ObWriteFileConsentResponse4DataStatusEnumAwaitingUpload        ObWriteFileConsentResponse4DataStatusEnum = "AwaitingUpload"
	ObWriteFileConsentResponse4DataStatusEnumConsumed              ObWriteFileConsentResponse4DataStatusEnum = "Consumed"
	ObWriteFileConsentResponse4DataStatusEnumRejected              ObWriteFileConsentResponse4DataStatusEnum = "Rejected"
)

type ObWriteFileConsentResponse4Data struct {
	Authorisation        *ObWriteFileConsentResponse4DataAuthorisation `json:"Authorisation"`
	Charges              []ObWriteFileConsentResponse4DataCharges      `json:"Charges"`
	ConsentID            string                                        `json:"ConsentId"`
	CreationDateTime     time.Time                                     `json:"CreationDateTime"`
	CutOffDateTime       *time.Time                                    `json:"CutOffDateTime"`
	Debtor               *ObCashAccountDebtor4                         `json:"Debtor"`
	Initiation           ObWriteFileConsentResponse4DataInitiation     `json:"Initiation"`
	ScaSupportData       *ObscaSupportData1                            `json:"SCASupportData"`
	Status               ObWriteFileConsentResponse4DataStatusEnum     `json:"Status"`
	StatusUpdateDateTime time.Time                                     `json:"StatusUpdateDateTime"`
}

type ObWriteFileConsentResponse4 struct {
	Data  ObWriteFileConsentResponse4Data `json:"Data"`
	Links *Links                          `json:"Links"`
	Meta  *Meta                           `json:"Meta"`
}
