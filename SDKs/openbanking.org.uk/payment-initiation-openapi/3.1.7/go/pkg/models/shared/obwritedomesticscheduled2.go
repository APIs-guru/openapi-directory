package shared

import (
	"time"
)

type ObWriteDomesticScheduled2DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticScheduled2DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomesticScheduled2DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticScheduled2DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteDomesticScheduled2DataInitiation struct {
	CreditorAccount            ObWriteDomesticScheduled2DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress      *ObPostalAddress6                                             `json:"CreditorPostalAddress"`
	DebtorAccount              *ObWriteDomesticScheduled2DataInitiationDebtorAccount         `json:"DebtorAccount"`
	EndToEndIdentification     *string                                                       `json:"EndToEndIdentification"`
	InstructedAmount           ObWriteDomesticScheduled2DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification  string                                                        `json:"InstructionIdentification"`
	LocalInstrument            *string                                                       `json:"LocalInstrument"`
	RemittanceInformation      *ObWriteDomesticScheduled2DataInitiationRemittanceInformation `json:"RemittanceInformation"`
	RequestedExecutionDateTime time.Time                                                     `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                        `json:"SupplementaryData"`
}

type ObWriteDomesticScheduled2Data struct {
	ConsentID  string                                  `json:"ConsentId"`
	Initiation ObWriteDomesticScheduled2DataInitiation `json:"Initiation"`
}

type ObWriteDomesticScheduled2 struct {
	Data ObWriteDomesticScheduled2Data `json:"Data"`
	Risk ObRisk1                       `json:"Risk"`
}
