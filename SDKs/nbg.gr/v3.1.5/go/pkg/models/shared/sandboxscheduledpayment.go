package shared

import (
	"time"
)

// SandboxScheduledPayment
// Scheduled payment information
type SandboxScheduledPayment struct {
	Amount          *float64   `json:"amount,omitempty"`
	Description     *string    `json:"description,omitempty"`
	ExecutionDate   *time.Time `json:"executionDate,omitempty"`
	SenderReference *string    `json:"senderReference,omitempty"`
}
