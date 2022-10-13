package shared

import (
	"time"
)

type ObReadDirectDebit2DataDirectDebit struct {
	AccountID               string                                `json:"AccountId"`
	DirectDebitID           *string                               `json:"DirectDebitId"`
	DirectDebitStatusCode   *ObExternalDirectDebitStatus1CodeEnum `json:"DirectDebitStatusCode"`
	Frequency               *string                               `json:"Frequency"`
	MandateIdentification   string                                `json:"MandateIdentification"`
	Name                    string                                `json:"Name"`
	PreviousPaymentAmount   *ObActiveOrHistoricCurrencyAndAmount0 `json:"PreviousPaymentAmount"`
	PreviousPaymentDateTime *time.Time                            `json:"PreviousPaymentDateTime"`
}

type ObReadDirectDebit2Data struct {
	DirectDebit []ObReadDirectDebit2DataDirectDebit `json:"DirectDebit"`
}

type ObReadDirectDebit2 struct {
	Data  ObReadDirectDebit2Data `json:"Data"`
	Links *Links                 `json:"Links"`
	Meta  *Meta                  `json:"Meta"`
}
