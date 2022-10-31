package shared



type EntryDetailsElement struct {
    CheckID *string `json:"checkId,omitempty"`
    CreditorAccount *AccountReference16Ch `json:"creditorAccount,omitempty"`
    CreditorAgent *string `json:"creditorAgent,omitempty"`
    CreditorID *string `json:"creditorId,omitempty"`
    CreditorName *string `json:"creditorName,omitempty"`
    CurrencyExchange []ReportExchangeRate `json:"currencyExchange,omitempty"`
    DebtorAccount *AccountReference16Ch `json:"debtorAccount,omitempty"`
    DebtorAgent *string `json:"debtorAgent,omitempty"`
    DebtorName *string `json:"debtorName,omitempty"`
    EndToEndID *string `json:"endToEndId,omitempty"`
    MandateID *string `json:"mandateId,omitempty"`
    PurposeCode *PurposeCodeEnum `json:"purposeCode,omitempty"`
    RemittanceInformationStructured *RemittanceInformationStructured `json:"remittanceInformationStructured,omitempty"`
    RemittanceInformationStructuredArray []RemittanceInformationStructured `json:"remittanceInformationStructuredArray,omitempty"`
    RemittanceInformationUnstructured *string `json:"remittanceInformationUnstructured,omitempty"`
    RemittanceInformationUnstructuredArray []string `json:"remittanceInformationUnstructuredArray,omitempty"`
    TransactionAmount Amount `json:"transactionAmount"`
    UltimateCreditor *string `json:"ultimateCreditor,omitempty"`
    UltimateDebtor *string `json:"ultimateDebtor,omitempty"`
    
}

