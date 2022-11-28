package shared

import (
	"time"
)

// ObCashBalance1
// Set of elements used to define the balance details.
type ObCashBalance1 struct {
	AccountID            string                              `json:"AccountId"`
	Amount               ObActiveOrHistoricCurrencyAndAmount `json:"Amount"`
	CreditDebitIndicator ObCreditDebitCodeEnum               `json:"CreditDebitIndicator"`
	CreditLine           []ObCreditLine1                     `json:"CreditLine,omitempty"`
	DateTime             time.Time                           `json:"DateTime"`
	Type                 ObBalanceType1CodeEnum              `json:"Type"`
}
