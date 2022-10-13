package shared

import (
	"time"
)

type PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON struct {
	DayOfExecution *DayOfExecutionEnum `json:"dayOfExecution"`
	EndDate        *time.Time          `json:"endDate"`
	ExecutionRule  *ExecutionRuleEnum  `json:"executionRule"`
	Frequency      FrequencyCodeEnum   `json:"frequency"`
	StartDate      time.Time           `json:"startDate"`
}
