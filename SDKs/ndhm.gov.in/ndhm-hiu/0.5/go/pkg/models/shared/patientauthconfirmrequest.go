package shared

import (
	"time"
)

type PatientAuthConfirmRequestCredential struct {
	AuthCode    *string             `json:"authCode,omitempty"`
	Demographic *PatientDemographic `json:"demographic,omitempty"`
}

type PatientAuthConfirmRequest struct {
	Credential    PatientAuthConfirmRequestCredential `json:"credential"`
	RequestID     string                              `json:"requestId"`
	Timestamp     time.Time                           `json:"timestamp"`
	TransactionID string                              `json:"transactionId"`
}
