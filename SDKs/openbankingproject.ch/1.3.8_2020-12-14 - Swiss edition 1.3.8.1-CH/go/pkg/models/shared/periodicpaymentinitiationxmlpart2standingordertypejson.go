package shared

import (
"time")

type PeriodicPaymentInitiationXMLPart2StandingorderTypeJSON struct {
    DayOfExecution *DayOfExecutionEnum `json:"dayOfExecution,omitempty"`
    EndDate *time.Time `json:"endDate,omitempty"`
    ExecutionRule *ExecutionRuleEnum `json:"executionRule,omitempty"`
    Frequency FrequencyCodeEnum `json:"frequency"`
    StartDate time.Time `json:"startDate"`
    
}

