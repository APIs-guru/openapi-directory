package shared

import (
	"time"
)

type PatientDiscoveryResult struct {
	Error         *Error                 `json:"error"`
	Patient       *PatientRepresentation `json:"patient"`
	RequestID     string                 `json:"requestId"`
	Resp          RequestReference       `json:"resp"`
	Timestamp     time.Time              `json:"timestamp"`
	TransactionID string                 `json:"transactionId"`
}
