package shared

import (
	"time"
)

type ObScheduledPayment3 struct {
	AccountID                string                              `json:"AccountId"`
	CreditorAccount          *ObCashAccount5                     `json:"CreditorAccount"`
	DebtorReference          *string                             `json:"DebtorReference"`
	InstructedAmount         ObActiveOrHistoricCurrencyAndAmount `json:"InstructedAmount"`
	Reference                *string                             `json:"Reference"`
	ScheduledPaymentDateTime time.Time                           `json:"ScheduledPaymentDateTime"`
	ScheduledPaymentID       *string                             `json:"ScheduledPaymentId"`
	ScheduledType            ObExternalScheduleType1CodeEnum     `json:"ScheduledType"`
}
