package shared

import (
	"time"
)

type SandboxScheduledPayment struct {
	Amount          *float64   `json:"amount"`
	Description     *string    `json:"description"`
	ExecutionDate   *time.Time `json:"executionDate"`
	SenderReference *string    `json:"senderReference"`
}
