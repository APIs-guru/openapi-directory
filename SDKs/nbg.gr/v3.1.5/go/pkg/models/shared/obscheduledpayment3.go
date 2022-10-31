package shared

import (
"time")

type ObScheduledPayment3 struct {
    AccountID string `json:"AccountId"`
    CreditorAccount *ObCashAccount5 `json:"CreditorAccount,omitempty"`
    DebtorReference *string `json:"DebtorReference,omitempty"`
    InstructedAmount ObActiveOrHistoricCurrencyAndAmount `json:"InstructedAmount"`
    Reference *string `json:"Reference,omitempty"`
    ScheduledPaymentDateTime time.Time `json:"ScheduledPaymentDateTime"`
    ScheduledPaymentID *string `json:"ScheduledPaymentId,omitempty"`
    ScheduledType ObExternalScheduleType1CodeEnum `json:"ScheduledType"`
    
}

