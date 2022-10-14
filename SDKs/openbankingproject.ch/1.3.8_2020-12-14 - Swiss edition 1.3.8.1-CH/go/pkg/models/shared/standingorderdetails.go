package shared

import (
	"time"
)

type StandingOrderDetails struct {
	DayOfExecution    *DayOfExecutionEnum     `json:"dayOfExecution,omitempty"`
	EndDate           *time.Time              `json:"endDate,omitempty"`
	ExecutionRule     *ExecutionRuleEnum      `json:"executionRule,omitempty"`
	Frequency         FrequencyCodeEnum       `json:"frequency"`
	LimitAmount       *Amount                 `json:"limitAmount,omitempty"`
	MonthsOfExecution []MonthsOfExecutionEnum `json:"monthsOfExecution,omitempty"`
	Multiplicator     *int64                  `json:"multiplicator,omitempty"`
	StartDate         time.Time               `json:"startDate"`
	WithinAMonthFlag  *bool                   `json:"withinAMonthFlag,omitempty"`
}
