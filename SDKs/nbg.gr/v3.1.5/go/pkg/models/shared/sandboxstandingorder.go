package shared

import (
	"time"
)

type SandboxStandingOrder struct {
	Amount           *float64   `json:"amount"`
	Description      *string    `json:"description"`
	FinalPaymentDate *time.Time `json:"finalPaymentDate"`
	FirstPaymentDate *time.Time `json:"firstPaymentDate"`
	Frequency        string     `json:"frequency"`
	LastPaymentDate  *time.Time `json:"lastPaymentDate"`
	NextPaymentDate  *time.Time `json:"nextPaymentDate"`
	Status           *string    `json:"status"`
}
