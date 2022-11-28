package shared

import (
	"time"
)

// PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON
// The body part 2 of a periodic payment initation request containes the execution related informations
// of the periodic payment.
type PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON struct {
	DayOfExecution *DayOfExecutionEnum `json:"dayOfExecution,omitempty"`
	EndDate        *time.Time          `json:"endDate,omitempty"`
	ExecutionRule  *ExecutionRuleEnum  `json:"executionRule,omitempty"`
	Frequency      FrequencyCodeEnum   `json:"frequency"`
	StartDate      time.Time           `json:"startDate"`
}
