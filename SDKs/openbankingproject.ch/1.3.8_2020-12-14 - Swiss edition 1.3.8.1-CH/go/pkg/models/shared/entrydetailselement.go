package shared

type EntryDetailsElement struct {
	CheckID                                *string                           `json:"checkId"`
	CreditorAccount                        *AccountReference16Ch             `json:"creditorAccount"`
	CreditorAgent                          *string                           `json:"creditorAgent"`
	CreditorID                             *string                           `json:"creditorId"`
	CreditorName                           *string                           `json:"creditorName"`
	CurrencyExchange                       []ReportExchangeRate              `json:"currencyExchange"`
	DebtorAccount                          *AccountReference16Ch             `json:"debtorAccount"`
	DebtorAgent                            *string                           `json:"debtorAgent"`
	DebtorName                             *string                           `json:"debtorName"`
	EndToEndID                             *string                           `json:"endToEndId"`
	MandateID                              *string                           `json:"mandateId"`
	PurposeCode                            *PurposeCodeEnum                  `json:"purposeCode"`
	RemittanceInformationStructured        *RemittanceInformationStructured  `json:"remittanceInformationStructured"`
	RemittanceInformationStructuredArray   []RemittanceInformationStructured `json:"remittanceInformationStructuredArray"`
	RemittanceInformationUnstructured      *string                           `json:"remittanceInformationUnstructured"`
	RemittanceInformationUnstructuredArray []string                          `json:"remittanceInformationUnstructuredArray"`
	TransactionAmount                      Amount                            `json:"transactionAmount"`
	UltimateCreditor                       *string                           `json:"ultimateCreditor"`
	UltimateDebtor                         *string                           `json:"ultimateDebtor"`
}
