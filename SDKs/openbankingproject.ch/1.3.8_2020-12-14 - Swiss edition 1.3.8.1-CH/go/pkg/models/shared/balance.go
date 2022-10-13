package shared

import (
	"time"
)

type Balance struct {
	BalanceAmount            Amount          `json:"balanceAmount"`
	BalanceType              BalanceTypeEnum `json:"balanceType"`
	CreditLimitIncluded      *bool           `json:"creditLimitIncluded"`
	LastChangeDateTime       *time.Time      `json:"lastChangeDateTime"`
	LastCommittedTransaction *string         `json:"lastCommittedTransaction"`
	ReferenceDate            *time.Time      `json:"referenceDate"`
}
