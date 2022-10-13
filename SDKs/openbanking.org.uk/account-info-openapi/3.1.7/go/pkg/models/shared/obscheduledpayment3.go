package shared

import (
	"time"
)

type ObScheduledPayment3 struct {
	AccountID                string                                           `json:"AccountId"`
	CreditorAccount          *ObCashAccount51                                 `json:"CreditorAccount"`
	CreditorAgent            *ObBranchAndFinancialInstitutionIdentification51 `json:"CreditorAgent"`
	DebtorReference          *string                                          `json:"DebtorReference"`
	InstructedAmount         ObActiveOrHistoricCurrencyAndAmount1             `json:"InstructedAmount"`
	Reference                *string                                          `json:"Reference"`
	ScheduledPaymentDateTime time.Time                                        `json:"ScheduledPaymentDateTime"`
	ScheduledPaymentID       *string                                          `json:"ScheduledPaymentId"`
	ScheduledType            ObExternalScheduleType1CodeEnum                  `json:"ScheduledType"`
}
