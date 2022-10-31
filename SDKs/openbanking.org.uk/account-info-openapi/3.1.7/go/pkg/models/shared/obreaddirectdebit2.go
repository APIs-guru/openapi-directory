package shared

import (
"time")

type ObReadDirectDebit2DataDirectDebit struct {
    AccountID string `json:"AccountId"`
    DirectDebitID *string `json:"DirectDebitId,omitempty"`
    DirectDebitStatusCode *ObExternalDirectDebitStatus1CodeEnum `json:"DirectDebitStatusCode,omitempty"`
    Frequency *string `json:"Frequency,omitempty"`
    MandateIdentification string `json:"MandateIdentification"`
    Name string `json:"Name"`
    PreviousPaymentAmount *ObActiveOrHistoricCurrencyAndAmount0 `json:"PreviousPaymentAmount,omitempty"`
    PreviousPaymentDateTime *time.Time `json:"PreviousPaymentDateTime,omitempty"`
    
}

type ObReadDirectDebit2Data struct {
    DirectDebit []ObReadDirectDebit2DataDirectDebit `json:"DirectDebit,omitempty"`
    
}

type ObReadDirectDebit2 struct {
    Data ObReadDirectDebit2Data `json:"Data"`
    Links *Links `json:"Links,omitempty"`
    Meta *Meta `json:"Meta,omitempty"`
    
}

