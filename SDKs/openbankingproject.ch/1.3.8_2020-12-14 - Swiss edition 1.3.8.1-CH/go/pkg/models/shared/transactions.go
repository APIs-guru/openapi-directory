package shared

import (
"time")

type Transactions struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalInformation *string `json:"additionalInformation,omitempty"`
    AdditionalInformationStructured *AdditionalInformationStructured `json:"additionalInformationStructured,omitempty"`
    BalanceAfterTransaction *Balance `json:"balanceAfterTransaction,omitempty"`
    BankTransactionCode *string `json:"bankTransactionCode,omitempty"`
    BatchIndicator *bool `json:"batchIndicator,omitempty"`
    BatchNumberOfTransactions *int64 `json:"batchNumberOfTransactions,omitempty"`
    BookingDate *time.Time `json:"bookingDate,omitempty"`
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
    EntryDetails []EntryDetailsElement `json:"entryDetails,omitempty"`
    EntryReference *string `json:"entryReference,omitempty"`
    MandateID *string `json:"mandateId,omitempty"`
    ProprietaryBankTransactionCode *string `json:"proprietaryBankTransactionCode,omitempty"`
    PurposeCode *PurposeCodeEnum `json:"purposeCode,omitempty"`
    RemittanceInformationStructured *string `json:"remittanceInformationStructured,omitempty"`
    RemittanceInformationStructuredArray []RemittanceInformationStructured `json:"remittanceInformationStructuredArray,omitempty"`
    RemittanceInformationUnstructured *string `json:"remittanceInformationUnstructured,omitempty"`
    RemittanceInformationUnstructuredArray []string `json:"remittanceInformationUnstructuredArray,omitempty"`
    TransactionAmount Amount `json:"transactionAmount"`
    TransactionID *string `json:"transactionId,omitempty"`
    UltimateCreditor *string `json:"ultimateCreditor,omitempty"`
    UltimateDebtor *string `json:"ultimateDebtor,omitempty"`
    ValueDate *time.Time `json:"valueDate,omitempty"`
    
}

