package shared

import (
	"time"
)

type StandingOrderDetails struct {
	DayOfExecution    *DayOfExecutionEnum     `json:"dayOfExecution"`
	EndDate           *time.Time              `json:"endDate"`
	ExecutionRule     *ExecutionRuleEnum      `json:"executionRule"`
	Frequency         FrequencyCodeEnum       `json:"frequency"`
	LimitAmount       *Amount                 `json:"limitAmount"`
	MonthsOfExecution []MonthsOfExecutionEnum `json:"monthsOfExecution"`
	Multiplicator     *int64                  `json:"multiplicator"`
	StartDate         time.Time               `json:"startDate"`
	WithinAMonthFlag  *bool                   `json:"withinAMonthFlag"`
}
