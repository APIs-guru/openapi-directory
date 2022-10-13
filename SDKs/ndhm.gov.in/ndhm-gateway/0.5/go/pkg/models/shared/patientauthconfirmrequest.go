package shared

import (
	"time"
)

type PatientAuthConfirmRequestCredential struct {
	AuthCode    *string             `json:"authCode"`
	Demographic *PatientDemographic `json:"demographic"`
}

type PatientAuthConfirmRequest struct {
	Credential    PatientAuthConfirmRequestCredential `json:"credential"`
	RequestID     string                              `json:"requestId"`
	Timestamp     time.Time                           `json:"timestamp"`
	TransactionID string                              `json:"transactionId"`
}
