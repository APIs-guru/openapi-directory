package shared

import (
	"time"
)

type Balance struct {
	BalanceAmount            Amount          `json:"balanceAmount"`
	BalanceType              BalanceTypeEnum `json:"balanceType"`
	CreditLimitIncluded      *bool           `json:"creditLimitIncluded,omitempty"`
	LastChangeDateTime       *time.Time      `json:"lastChangeDateTime,omitempty"`
	LastCommittedTransaction *string         `json:"lastCommittedTransaction,omitempty"`
	ReferenceDate            *time.Time      `json:"referenceDate,omitempty"`
}
