package shared

// ObWriteInternational3DataInitiationCreditor
// Party to which an amount of money is due.
type ObWriteInternational3DataInitiationCreditor struct {
	Name          *string           `json:"Name,omitempty"`
	PostalAddress *ObPostalAddress6 `json:"PostalAddress,omitempty"`
}

// ObWriteInternational3DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteInternational3DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteInternational3DataInitiationCreditorAgent
// Financial institution servicing an account for the creditor.
type ObWriteInternational3DataInitiationCreditorAgent struct {
	Identification *string           `json:"Identification,omitempty"`
	Name           *string           `json:"Name,omitempty"`
	PostalAddress  *ObPostalAddress6 `json:"PostalAddress,omitempty"`
	SchemeName     *string           `json:"SchemeName,omitempty"`
}

// ObWriteInternational3DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteInternational3DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

type ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum string

const (
	ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnumActual     ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = "Actual"
	ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnumAgreed     ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = "Agreed"
	ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnumIndicative ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum = "Indicative"
)

// ObWriteInternational3DataInitiationExchangeRateInformation
// Provides details on the currency exchange rate and contract.
type ObWriteInternational3DataInitiationExchangeRateInformation struct {
	ContractIdentification *string                                                                `json:"ContractIdentification,omitempty"`
	ExchangeRate           *float64                                                               `json:"ExchangeRate,omitempty"`
	RateType               ObWriteInternational3DataInitiationExchangeRateInformationRateTypeEnum `json:"RateType"`
	UnitCurrency           string                                                                 `json:"UnitCurrency"`
}

// ObWriteInternational3DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteInternational3DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

type ObWriteInternational3DataInitiationInstructionPriorityEnum string

const (
	ObWriteInternational3DataInitiationInstructionPriorityEnumNormal ObWriteInternational3DataInitiationInstructionPriorityEnum = "Normal"
	ObWriteInternational3DataInitiationInstructionPriorityEnumUrgent ObWriteInternational3DataInitiationInstructionPriorityEnum = "Urgent"
)

// ObWriteInternational3DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteInternational3DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteInternational3DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single international payment.
type ObWriteInternational3DataInitiation struct {
	ChargeBearer              *ObChargeBearerType1CodeEnum                                `json:"ChargeBearer,omitempty"`
	Creditor                  *ObWriteInternational3DataInitiationCreditor                `json:"Creditor,omitempty"`
	CreditorAccount           ObWriteInternational3DataInitiationCreditorAccount          `json:"CreditorAccount"`
	CreditorAgent             *ObWriteInternational3DataInitiationCreditorAgent           `json:"CreditorAgent,omitempty"`
	CurrencyOfTransfer        string                                                      `json:"CurrencyOfTransfer"`
	DebtorAccount             *ObWriteInternational3DataInitiationDebtorAccount           `json:"DebtorAccount,omitempty"`
	DestinationCountryCode    *string                                                     `json:"DestinationCountryCode,omitempty"`
	EndToEndIdentification    string                                                      `json:"EndToEndIdentification"`
	ExchangeRateInformation   *ObWriteInternational3DataInitiationExchangeRateInformation `json:"ExchangeRateInformation,omitempty"`
	ExtendedPurpose           *string                                                     `json:"ExtendedPurpose,omitempty"`
	InstructedAmount          ObWriteInternational3DataInitiationInstructedAmount         `json:"InstructedAmount"`
	InstructionIdentification string                                                      `json:"InstructionIdentification"`
	InstructionPriority       *ObWriteInternational3DataInitiationInstructionPriorityEnum `json:"InstructionPriority,omitempty"`
	LocalInstrument           *string                                                     `json:"LocalInstrument,omitempty"`
	Purpose                   *string                                                     `json:"Purpose,omitempty"`
	RemittanceInformation     *ObWriteInternational3DataInitiationRemittanceInformation   `json:"RemittanceInformation,omitempty"`
	SupplementaryData         map[string]interface{}                                      `json:"SupplementaryData,omitempty"`
}

type ObWriteInternational3Data struct {
	ConsentID  string                              `json:"ConsentId"`
	Initiation ObWriteInternational3DataInitiation `json:"Initiation"`
}

type ObWriteInternational3 struct {
	Data ObWriteInternational3Data `json:"Data"`
	Risk ObRisk1                   `json:"Risk"`
}
