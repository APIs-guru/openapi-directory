package shared

import (
	"time"
)

type ObWriteDomesticScheduled2DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticScheduled2DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteDomesticScheduled2DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomesticScheduled2DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

type ObWriteDomesticScheduled2DataInitiation struct {
	CreditorAccount            ObWriteDomesticScheduled2DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress      *ObPostalAddress6                                             `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount              *ObWriteDomesticScheduled2DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification     *string                                                       `json:"EndToEndIdentification,omitempty"`
	InstructedAmount           ObWriteDomesticScheduled2DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification  string                                                        `json:"InstructionIdentification"`
	LocalInstrument            *string                                                       `json:"LocalInstrument,omitempty"`
	RemittanceInformation      *ObWriteDomesticScheduled2DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	RequestedExecutionDateTime time.Time                                                     `json:"RequestedExecutionDateTime"`
	SupplementaryData          map[string]interface{}                                        `json:"SupplementaryData,omitempty"`
}

type ObWriteDomesticScheduled2Data struct {
	ConsentID  string                                  `json:"ConsentId"`
	Initiation ObWriteDomesticScheduled2DataInitiation `json:"Initiation"`
}

type ObWriteDomesticScheduled2 struct {
	Data ObWriteDomesticScheduled2Data `json:"Data"`
	Risk ObRisk1                       `json:"Risk"`
}
