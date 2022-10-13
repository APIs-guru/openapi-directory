package shared

type ObWriteInternational3DataInitiationCreditor struct {
	Name          *string           `json:"Name"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress"`
}

type ObWriteInternational3DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternational3DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification"`
	Name           *string           `json:"Name"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress"`
	SchemeName     *string           `json:"SchemeName"`
}

type ObWriteInternational3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification"`
}

type ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

type ObWriteInternational3DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                `json:"ContractIdentification"`
	ExchangeRate           *float64                                                               `json:"ExchangeRate"`
	RateType               ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                 `json:"UnitCurrency"`
}

type ObWriteInternational3DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternational3DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternational3DataInitiationInstructionPriorityEnumNormal ObWriteInternational3DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternational3DataInitiationInstructionPriorityEnumUrgent ObWriteInternational3DataInitiationInstructionPriorityEnum = "Urgent"
)

type ObWriteInternational3DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference"`
	Unstructured *string `json:"Unstructured"`
}

type ObWriteInternational3DataInitiation struct {
	ChargeBearer              *ObChargeBearerType1CodeEnum                                `json:"ChargeBearer"`
	Creditor                  *ObWriteInternational3DataInitiationCreditor                `json:"Creditor"`
	CreditorAccount           ObWriteInternational3DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent             *ObWriteInternational3DataInitiationCreditorAgent           `json:"CreditorAgent"`
	CurrencyOfTransfer        string                                                      `json:"CurrencyOfTransfer"`
	DebtorAccount             *ObWriteInternational3DataInitiationDebtorAccount           `json:"DebtorAccount"`
	DestinationCountryCode    *string                                                     `json:"DestinationCountryCode"`
	EndToEndIdentification    string                                                      `json:"EndToEndIdentification"`
	ExchangeRateInformation   *ObWriteInternational3DataInitiationExchangeRateInformation `json:"ExchangeRateInformation"`
	ExtendedPurpose           *string                                                     `json:"ExtendedPurpose"`
	InstructedAmount          ObWriteInternational3DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification string                                                      `json:"InstructionIdentification"`
	InstructionPriority       *ObWriteInternational3DataInitiationInstructionPriorityEnum `json:"InstructionPriority"`
	LocalInstrument           *string                                                     `json:"LocalInstrument"`
	Purpose                   *string                                                     `json:"Purpose"`
	RemittanceInformation     *ObWriteInternational3DataInitiationRemittanceInformation   `json:"RemittanceInformation"`
	SupplementaryData         map[string]interface{}                                      `json:"SupplementaryData"`
}

type ObWriteInternational3Data struct {
	ConsentID  string                              `json:"ConsentId"`
	Initiation ObWriteInternational3DataInitiation `json:"Initiation"`
}

type ObWriteInternational3 struct {
	Data ObWriteInternational3Data `json:"Data"`
	Risk ObRisk1                   `json:"Risk"`
}
