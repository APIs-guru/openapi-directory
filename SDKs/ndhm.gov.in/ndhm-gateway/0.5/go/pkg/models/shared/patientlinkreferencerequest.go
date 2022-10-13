package shared

import (
	"time"
)

type PatientLinkReferenceRequestPatient struct {
	CareContexts    []CareContext `json:"careContexts"`
	ID              string        `json:"id"`
	ReferenceNumber string        `json:"referenceNumber"`
}

type PatientLinkReferenceRequest struct {
	Patient       PatientLinkReferenceRequestPatient `json:"patient"`
	RequestID     string                             `json:"requestId"`
	Timestamp     time.Time                          `json:"timestamp"`
	TransactionID string                             `json:"transactionId"`
}
