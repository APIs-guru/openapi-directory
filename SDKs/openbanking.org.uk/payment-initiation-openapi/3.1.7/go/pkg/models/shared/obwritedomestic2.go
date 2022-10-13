package shared

type ObWriteDomestic2DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomestic2DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteDomestic2DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteDomestic2DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteDomestic2DataInitiation struct {
	CreditorAccount           ObWriteDomestic2DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress     *ObPostalAddress6                                    `json:"CreditorPostalAddress"`
	DebtorAccount             *ObWriteDomestic2DataInitiationDebtorAccount         `json:"DebtorAccount"`
	EndToEndIdentification    string                                               `json:"EndToEndIdentification"`
	InstructedAmount          ObWriteDomestic2DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification string                                               `json:"InstructionIdentification"`
	LocalInstrument           *string                                              `json:"LocalInstrument"`
	RemittanceInformation     *ObWriteDomestic2DataInitiationRemittanceInformation `json:"RemittanceInformation"`
	SupplementaryData         map[string]interface{}                               `json:"SupplementaryData"`
}

type ObWriteDomestic2Data struct {
	ConsentID  string                         `json:"ConsentId"`
	Initiation ObWriteDomestic2DataInitiation `json:"Initiation"`
}

type ObWriteDomestic2 struct {
	Data ObWriteDomestic2Data `json:"Data"`
	Risk ObRisk1              `json:"Risk"`
}
