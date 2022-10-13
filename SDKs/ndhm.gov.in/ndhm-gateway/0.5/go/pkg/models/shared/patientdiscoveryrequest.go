package shared

import (
	"time"
)

type PatientDiscoveryRequestPatient struct {
	Gender                PatientGenderEnum `json:"gender"`
	ID                    string            `json:"id"`
	Name                  string            `json:"name"`
	UnverifiedIdentifiers []Identifier      `json:"unverifiedIdentifiers"`
	VerifiedIdentifiers   []Identifier      `json:"verifiedIdentifiers"`
	YearOfBirth           int64             `json:"yearOfBirth"`
}

type PatientDiscoveryRequest struct {
	Patient       PatientDiscoveryRequestPatient `json:"patient"`
	RequestID     string                         `json:"requestId"`
	Timestamp     time.Time                      `json:"timestamp"`
	TransactionID string                         `json:"transactionId"`
}
