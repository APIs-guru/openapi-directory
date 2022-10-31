package shared

import (
"time")

type SandboxStandingOrder struct {
    Amount *float64 `json:"amount,omitempty"`
    Description *string `json:"description,omitempty"`
    FinalPaymentDate *time.Time `json:"finalPaymentDate,omitempty"`
    FirstPaymentDate *time.Time `json:"firstPaymentDate,omitempty"`
    Frequency string `json:"frequency"`
    LastPaymentDate *time.Time `json:"lastPaymentDate,omitempty"`
    NextPaymentDate *time.Time `json:"nextPaymentDate,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

