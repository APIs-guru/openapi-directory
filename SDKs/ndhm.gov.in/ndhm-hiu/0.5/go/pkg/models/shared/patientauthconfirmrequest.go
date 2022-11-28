package shared

import (
	"time"
)

// PatientAuthConfirmRequestCredential
// note, demographic details are only required for demographic auth at this point.
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
