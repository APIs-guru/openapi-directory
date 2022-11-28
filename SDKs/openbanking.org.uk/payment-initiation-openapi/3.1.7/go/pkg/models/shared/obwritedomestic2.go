package shared

// ObWriteDomestic2DataInitiationCreditorAccount
// Unambiguous identification of the account of the creditor to which a credit entry will be posted as a result of the payment transaction.
type ObWriteDomestic2DataInitiationCreditorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    string  `json:"Name"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomestic2DataInitiationDebtorAccount
// Unambiguous identification of the account of the debtor to which a debit entry will be made as a result of the transaction.
type ObWriteDomestic2DataInitiationDebtorAccount struct {
	Identification          string  `json:"Identification"`
	Name                    *string `json:"Name,omitempty"`
	SchemeName              string  `json:"SchemeName"`
	SecondaryIdentification *string `json:"SecondaryIdentification,omitempty"`
}

// ObWriteDomestic2DataInitiationInstructedAmount
// Amount of money to be moved between the debtor and creditor, before deduction of charges, expressed in the currency as ordered by the initiating party.
// Usage: This amount has to be transported unchanged through the transaction chain.
type ObWriteDomestic2DataInitiationInstructedAmount struct {
	Amount   string `json:"Amount"`
	Currency string `json:"Currency"`
}

// ObWriteDomestic2DataInitiationRemittanceInformation
// Information supplied to enable the matching of an entry with the items that the transfer is intended to settle, such as commercial invoices in an accounts' receivable system.
type ObWriteDomestic2DataInitiationRemittanceInformation struct {
	Reference    *string `json:"Reference,omitempty"`
	Unstructured *string `json:"Unstructured,omitempty"`
}

// ObWriteDomestic2DataInitiation
// The Initiation payload is sent by the initiating party to the ASPSP. It is used to request movement of funds from the debtor account to a creditor for a single domestic payment.
type ObWriteDomestic2DataInitiation struct {
	CreditorAccount           ObWriteDomestic2DataInitiationCreditorAccount        `json:"CreditorAccount"`
	CreditorPostalAddress     *ObPostalAddress6                                    `json:"CreditorPostalAddress,omitempty"`
	DebtorAccount             *ObWriteDomestic2DataInitiationDebtorAccount         `json:"DebtorAccount,omitempty"`
	EndToEndIdentification    string                                               `json:"EndToEndIdentification"`
	InstructedAmount          ObWriteDomestic2DataInitiationInstructedAmount       `json:"InstructedAmount"`
	InstructionIdentification string                                               `json:"InstructionIdentification"`
	LocalInstrument           *string                                              `json:"LocalInstrument,omitempty"`
	RemittanceInformation     *ObWriteDomestic2DataInitiationRemittanceInformation `json:"RemittanceInformation,omitempty"`
	SupplementaryData         map[string]interface{}                               `json:"SupplementaryData,omitempty"`
}

type ObWriteDomestic2Data struct {
	ConsentID  string                         `json:"ConsentId"`
	Initiation ObWriteDomestic2DataInitiation `json:"Initiation"`
}

type ObWriteDomestic2 struct {
	Data ObWriteDomestic2Data `json:"Data"`
	Risk ObRisk1              `json:"Risk"`
}
